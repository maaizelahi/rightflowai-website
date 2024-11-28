import { EmailTemplate, ContactEmailData } from '@/lib/types/email';

export const contactEmailTemplate: EmailTemplate<ContactEmailData> = {
  getSubject: (data) => `New Contact Form Submission from ${data.name}`,
  generateHtml: (data) => `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
    <p><strong>Submitted:</strong> ${data.submittedAt}</p>
  `
};