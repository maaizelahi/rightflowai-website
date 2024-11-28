import nodemailer from 'nodemailer';
import { ContactFormData } from '@/lib/types/contact';
import { emailConfig } from '@/lib/config/email';

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, company, message } = data;
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: 'info@rightflowai.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}