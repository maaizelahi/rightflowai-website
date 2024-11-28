import { NextResponse } from 'next/server';
import { z } from 'zod';
import { handleContactSubmission } from '@/lib/api/contact';
import { rateLimiter } from '@/lib/rate-limiter';

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

    // Parse request body
    const body = await request.json();

    // Handle contact submission
    const result = await handleContactSubmission(body, ip);

    return NextResponse.json({ message: 'Message sent successfully', data: result });
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