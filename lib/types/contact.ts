export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactRecord extends ContactFormData {
  id?: number;
  ipAddress: string;
  status: ContactStatus;
  createdAt?: Date;
}

export type ContactStatus = 'pending' | 'completed' | 'failed';

export interface ContactUpdateData {
  status: ContactStatus;
}