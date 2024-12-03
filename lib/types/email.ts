export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}