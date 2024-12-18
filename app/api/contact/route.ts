import { NextRequest, NextResponse } from "next/server";
import { validateContactSchema } from "@/lib/validation/contact";
import { rateLimiter } from "@/lib/rate-limiter";
import { sendContactEmail } from "@/lib/email/service";
import { corsHeaders } from "@/lib/api/headers";
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

    // Send email
    await sendContactEmail(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: { submittedAt: new Date().toISOString() },
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          code: error.code,
        },
        { status: error.status, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process your request",
        code: "INTERNAL_SERVER_ERROR",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}