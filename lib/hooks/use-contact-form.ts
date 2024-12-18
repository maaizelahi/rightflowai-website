"use client";

import { useState } from "react";
import { ContactFormData } from "@/lib/types/contact";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/api/contact";

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  businessType: "",
  challenge: "",
  preferredContact: "email",
  company: ""
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
      // Validate required fields
      if (!formData.name || !formData.email || !formData.businessType || !formData.challenge) {
        throw new Error("Please fill in all required fields");
      }

      // If phone is selected as preferred contact, validate phone number
      if (formData.preferredContact === "phone" && !formData.phone) {
        throw new Error("Phone number is required when selected as preferred contact method");
      }

      await submitContactForm(formData);
      
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