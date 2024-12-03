import { NextRequest, NextResponse } from "next/server";
import { validateContactSchema } from "@/lib/validation/contact";
import { rateLimiter } from "@/lib/rate-limiter";
import { sendContactEmail } from "@/lib/email/service";
import { corsHeaders } from "@/lib/api/headers";
import { emailDefaults } from "@/lib/config/email";
import { handleApiError } from "@/lib/middleware/error-handler";
import { ApiError } from "@/lib/types/api";

export async function POST(request: NextRequest) {
  if (request.method === "OPTIONS") {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    try {
      await rateLimiter.consume(ip);
    } catch {
      throw new ApiError(
        "Too many requests. Please try again later.",
        "RATE_LIMIT_EXCEEDED",
        429
      );
    }

    // Parse and validate request
    const body = await request.json().catch(() => {
      throw new ApiError("Invalid request body", "INVALID_REQUEST", 400);
    });

    // Validate form data
    const validatedData = validateContactSchema(body);
    const emailData = {
      ...validatedData,
      submittedAt: new Date().toLocaleString(),
    };

    // Send email with retry logic
    await sendContactEmail(emailData);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: { submittedAt: emailData.submittedAt },
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
