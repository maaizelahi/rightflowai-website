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
import { ContactField } from "./types";
import { contactFields } from "./config";

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

  const renderField = (field: ContactField) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name as keyof ContactFormData] || ""}
            onChange={onChange}
          />
        );
      case "textarea":
        return (
          <Textarea
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            className="h-32"
            value={formData[field.name as keyof ContactFormData] || ""}
            onChange={onChange}
          />
        );
      case "select":
        return (
          <Select 
            value={formData[field.name as keyof ContactFormData] as string} 
            onValueChange={handleSelectChange}
          >
            <SelectTrigger id={field.name}>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {contactFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
}