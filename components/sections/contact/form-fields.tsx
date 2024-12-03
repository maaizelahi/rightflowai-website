"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/lib/types/contact";

interface FormFieldsProps {
  formData: ContactFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function FormFields({ formData, onChange }: FormFieldsProps) {
  return (
    <div className="space-y-4">
      <Input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={onChange}
        required
        minLength={2}
        maxLength={100}
        aria-label="Name"
      />
      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={onChange}
        required
        aria-label="Email"
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={onChange}
        aria-label="Phone"
      />
      <Input
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={onChange}
        required
        minLength={2}
        maxLength={100}
        aria-label="Company"
      />
      <Textarea
        name="message"
        placeholder="Tell us about your project"
        className="h-32"
        value={formData.message}
        onChange={onChange}
        required
        minLength={10}
        maxLength={1000}
        aria-label="Message"
      />
    </div>
  );
}
