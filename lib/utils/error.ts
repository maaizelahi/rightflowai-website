import { ApiError, ApiErrorDetail } from '@/lib/types/api';
import { ZodError } from 'zod';

export function handleApiError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }

  if (error instanceof ZodError) {
    return new ApiError(
      'Validation failed',
      'VALIDATION_ERROR',
      400,
      error.errors.map(err => ({
        field: err.path.join('.'),
        code: 'VALIDATION_ERROR',
        message: err.message
      }))
    );
  }

  if (error instanceof Error) {
    return new ApiError(error.message);
  }

  return new ApiError('An unexpected error occurred');
}

export function formatValidationErrors(error: ZodError): ApiErrorDetail[] {
  return error.errors.map(err => ({
    field: err.path.join('.'),
    code: 'VALIDATION_ERROR',
    message: err.message
  }));
}