import { ContactFormData } from './contact';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth?: {
    user: string;
    pass: string;
  };
}

export interface EmailTemplate<T = any> {
  getSubject: (data: T) => string;
  generateHtml: (data: T) => string;
}

export interface ContactEmailData extends ContactFormData {
  submittedAt: string;
}