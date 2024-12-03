export interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Add phone as optional
  company: string;
  message: string;
}

export type ContactStatus = "pending" | "completed" | "failed";

export interface ContactRecord extends ContactFormData {
  id: number;
  ipAddress: string;
  status: ContactStatus;
  createdAt: Date;
}
