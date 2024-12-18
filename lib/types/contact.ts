export interface ContactFormData {
  name: string;
  email: string;
  businessType: string;
  challenge: string;
  preferredContact: 'email' | 'phone';
  phone?: string;
  company?: string;
}

export type ContactStatus = "pending" | "completed" | "failed";

export interface ContactRecord extends ContactFormData {
  id: number;
  ipAddress: string;
  status: ContactStatus;
  createdAt: Date;
}