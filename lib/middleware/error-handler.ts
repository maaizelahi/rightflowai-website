import { NextResponse } from 'next/server';
import { ApiError } from '../types/api';
import { ZodError } from 'zod';

export function handleApiError(error: unknown) {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        details: error.details,
      },
      { status: error.status }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        error: 'Validation failed',
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          code: 'VALIDATION_ERROR',
          message: err.message,
        })),
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      code: 'INTERNAL_SERVER_ERROR',
    },
    { status: 500 }
  );
}