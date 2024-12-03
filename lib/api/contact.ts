import { ContactFormData } from '@/lib/types/contact';
import { ApiResponse } from '@/lib/types/api';

interface ContactResponse {
  message: string;
  submittedAt: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse<ContactResponse>> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to submit contact form');
  }

  return result;
}