export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  businessType: string;
  challenge: string;
  preferredContact: 'email' | 'phone';
}

export type ContactStatus = "pending" | "completed" | "failed";

export interface ContactRecord extends ContactFormData {
  id: number;
  ipAddress: string;
  status: ContactStatus;
  createdAt: Date;
}