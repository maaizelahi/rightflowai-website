import { ContactFormData } from '@/lib/types/contact';
import { createContact, updateContactStatus } from '@/lib/db/contact';
import { sendContactEmail } from '@/lib/email/contact';
import { validateContactSchema } from '@/lib/validation/contact';

export async function handleContactSubmission(data: unknown, ipAddress: string) {
  // Validate form data
  const validatedData = validateContactSchema(data);

  // Create initial contact record
  const contact = await createContact({
    ...validatedData,
    ipAddress,
    status: 'pending'
  });

  try {
    // Send email notification
    await sendContactEmail(validatedData);

    // Update contact status to completed
    const updatedContact = await updateContactStatus(contact.id, 'completed');

    return { success: true, contact: updatedContact };
  } catch (error) {
    // Update contact status to failed
    if (contact.id) {
      await updateContactStatus(contact.id, 'failed');
    }
    throw error;
  }
}