import { useState } from "react";
import { ContactFormData } from "@/lib/types/contact";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/api/contact";

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      toast.success("Message sent successfully", {
        description: "We will get back to you soon.",
      });

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later",
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
