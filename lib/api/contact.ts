import { ContactFormData } from '@/lib/types/contact';
import { ApiResponse } from '@/lib/types/api';
import { apiRequest } from '@/lib/utils/api';

interface ContactResponse {
  message: string;
  submittedAt: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse<ContactResponse>> {
  try {
    const response = await apiRequest<ContactResponse>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit contact form',
    };
  }
}