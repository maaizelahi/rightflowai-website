import { ContactFormData } from '@/lib/types/contact';
import { ApiResponse } from '@/lib/types/api';

interface ContactResponse {
  message: string;
  submittedAt: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse<ContactResponse>> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error || 'Failed to submit contact form');
  }

  const result = await response.json();
  return result;
}