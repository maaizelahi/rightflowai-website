import nodemailer from 'nodemailer';
import { EmailConfig } from '@/lib/types/email';

export function createEmailTransport(config: EmailConfig) {
  return nodemailer.createTransport(config);
}