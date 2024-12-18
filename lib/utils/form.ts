import { z } from 'zod';
import { ApiResponse } from '@/lib/types/api';

interface FormSubmissionParams<T> {
  formData: T;
  setIsSubmitting: (value: boolean) => void;
  validateForm: (data: unknown) => z.SafeParseReturnType<unknown, T>;
  submitForm: (data: T) => Promise<ApiResponse<any>>;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export async function handleFormSubmission<T>({
  formData,
  setIsSubmitting,
  validateForm,
  submitForm,
  onSuccess,
  onError
}: FormSubmissionParams<T>) {
  setIsSubmitting(true);

  try {
    const validation = validateForm(formData);
    
    if (!validation.success) {
      const firstError = validation.error.errors[0]?.message;
      throw new Error(firstError || "Please check all required fields");
    }

    const response = await submitForm(validation.data);
    
    if (!response.success) {
      throw new Error(response.error || "Failed to submit form");
    }

    onSuccess();
    return true;
  } catch (error) {
    onError(error instanceof Error ? error : new Error("An unexpected error occurred"));
    return false;
  } finally {
    setIsSubmitting(false);
  }
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.startsWith('1') ? `+${cleaned}` : `+1${cleaned}`;
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}