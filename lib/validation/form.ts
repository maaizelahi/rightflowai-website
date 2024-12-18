import { z } from 'zod';
import { ZodError } from 'zod';

export interface ValidationError {
  field: string;
  message: string;
}

export function getValidationErrors(error: unknown): ValidationError[] {
  if (error instanceof ZodError) {
    return error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }));
  }
  
  if (error instanceof Error) {
    return [{
      field: 'general',
      message: error.message
    }];
  }
  
  return [{
    field: 'general',
    message: 'An unexpected error occurred'
  }];
}

export function getFirstValidationError(error: unknown): string {
  const errors = getValidationErrors(error);
  return errors[0]?.message || 'Validation failed';
}