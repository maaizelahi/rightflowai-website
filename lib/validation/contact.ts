import { z } from "zod";
import { ContactFormData } from "@/lib/types/contact";
import { isValidPhoneNumber } from "@/lib/utils/form";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .refine(
      (val) => !val || isValidPhoneNumber(val),
      "Invalid phone number format. Please use international format (e.g., +1234567890)"
    )
    .optional(),
  businessType: z
    .string()
    .min(2, "Business type must be at least 2 characters")
    .max(100, "Business type must be less than 100 characters")
    .trim(),
  challenge: z
    .string()
    .min(10, "Challenge description must be at least 10 characters")
    .max(1000, "Challenge description must be less than 1000 characters")
    .trim(),
  preferredContact: z
    .enum(["email", "phone"] as const, {
      required_error: "Please select a preferred contact method",
    }),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters")
    .trim()
    .optional(),
}).refine(
  (data) => {
    if (data.preferredContact === "phone" && !data.phone) {
      return false;
    }
    return true;
  },
  {
    message: "Phone number is required when phone is selected as preferred contact method",
    path: ["phone"],
  }
);

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