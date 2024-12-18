"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/lib/types/contact";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FormFieldsProps {
  formData: ContactFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string }
  ) => void;
}

export function FormFields({ formData, onChange }: FormFieldsProps) {
  const handleSelectChange = (value: string) => {
    onChange({ name: "preferredContact", value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type</Label>
        <Input
          id="businessType"
          name="businessType"
          placeholder="e.g., Coach, Consultant, Course Creator"
          value={formData.businessType}
          onChange={onChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="challenge">What would you like to automate?</Label>
        <Textarea
          id="challenge"
          name="challenge"
          placeholder="Describe the tasks or processes you'd like to automate..."
          className="h-32"
          value={formData.challenge}
          onChange={onChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
        <Select 
          value={formData.preferredContact} 
          onValueChange={handleSelectChange}
        >
          <SelectTrigger id="preferredContact">
            <SelectValue placeholder="How should we contact you?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.preferredContact === "phone" && (
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={onChange}
            required
          />
        </div>
      )}
    </div>
  );
}