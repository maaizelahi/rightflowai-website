import { z } from "zod";
import { ContactFormData } from "@/lib/types/contact";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]*$/, "Invalid phone number format")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .optional()
    .or(z.literal("")), // Allow empty string
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

export function validateContactSchema(data: unknown): ContactFormData {
  return contactSchema.parse(data);
}

export function validateContactForm(data: unknown) {
  const result = contactSchema.safeParse(data);
  return {
    success: result.success,
    data: result.success ? result.data : undefined,
    errors: !result.success ? result.error.flatten() : undefined,
  };
}
