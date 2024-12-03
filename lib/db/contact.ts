import { ContactFormData } from '@/lib/types/contact';

export async function saveContactToDatabase(data: ContactFormData) {
  try {
    // Here you would typically save to your database
    // Since we're not using Prisma, we'll just log the data
    console.log('Contact form submission:', data);
    return { success: true };
  } catch (error) {
    console.error('Database error:', error);
    return { success: false, error };
  }
}