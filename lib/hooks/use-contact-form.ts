"use client";

import { useState } from "react";
import { ContactFormData } from "@/lib/types/contact";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/api/contact";
import { validateContactForm } from "@/lib/validation/contact";

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  businessType: "",
  challenge: "",
  preferredContact: "email"
};

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string }
  ) => {
    const name = 'target' in e ? e.target.name : e.name;
    const value = 'target' in e ? e.target.value : e.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validation = validateContactForm(formData);
      
      if (!validation.success) {
        const firstError = validation.errors?.fieldErrors[Object.keys(validation.errors.fieldErrors)[0]]?.[0];
        throw new Error(firstError || "Please check all required fields");
      }

      const response = await submitContactForm(validation.data!);
      
      if (!response.success) {
        throw new Error(response.error || "Failed to submit form");
      }

      toast.success("Message sent successfully", {
        description: "We will get back to you soon.",
      });

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again later",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
}