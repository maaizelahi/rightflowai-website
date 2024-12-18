"use client";

import { useState } from "react";
import { ContactFormData } from "@/lib/types/contact";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/api/contact";
import { validateContactForm } from "@/lib/validation/contact";
import { handleFormSubmission } from "@/lib/utils/form";

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
    
    const result = await handleFormSubmission({
      formData,
      setIsSubmitting,
      validateForm: validateContactForm,
      submitForm: submitContactForm,
      onSuccess: () => {
        toast.success("Message sent successfully", {
          description: "We will get back to you soon.",
        });
        resetForm();
      },
      onError: (error) => {
        toast.error("Failed to send message", {
          description: error.message,
        });
      }
    });

    return result;
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
}