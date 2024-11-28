import { NextResponse } from 'next/server';
import { z } from 'zod';
import { RateLimiter } from 'rate-limiter-flexible';
import { createContact } from '@/lib/db/contact';
import { sendContactEmail } from '@/lib/email/contact';
import { validateContactSchema } from '@/lib/validation/contact';
import { rateLimiterOpts } from '@/lib/config/rate-limiter';

// Initialize rate limiter
const rateLimiter = new RateLimiter(rateLimiterOpts);

export async function POST(request: Request) {
  try {
    // Get client IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Check rate limit
    try {
      await rateLimiter.consume(ip);
    } catch (error) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = validateContactSchema(body);

    // Save to database
    const contact = await createContact({
      ...validatedData,
      ipAddress: ip,
      status: 'pending'
    });

    // Send email notification
    await sendContactEmail(validatedData);

    // Update contact status
    await createContact({
      ...contact,
      status: 'completed'
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}