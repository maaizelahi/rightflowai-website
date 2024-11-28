import { z } from 'zod';
import { ContactFormData } from '@/lib/types/contact';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(2).max(100),
  message: z.string().min(10).max(1000),
});

export function validateContactSchema(data: unknown): ContactFormData {
  return contactSchema.parse(data);
}