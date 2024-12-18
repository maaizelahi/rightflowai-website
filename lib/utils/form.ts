import { ZodError } from 'zod';

export function getValidationError(error: unknown): string {
  if (error instanceof ZodError) {
    const firstError = error.errors[0];
    return firstError?.message || 'Validation failed';
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred';
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Add international format if not present
  if (!cleaned.startsWith('1')) {
    return `+1${cleaned}`;
  }
  
  return `+${cleaned}`;
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
}