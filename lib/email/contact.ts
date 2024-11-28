import { ContactFormData } from '@/lib/types/contact';
import { createEmailTransport } from './transport';
import { contactEmailTemplate } from './templates/contact';
import { emailConfig } from '@/lib/config/email';
import { ContactEmailData } from '@/lib/types/email';

export async function sendContactEmail(data: ContactFormData) {
  const transport = createEmailTransport({
    ...emailConfig,
    auth: {
      user: process.env.ZOHO_USER!,
      pass: process.env.ZOHO_PASS!,
    },
  });

  const emailData: ContactEmailData = {
    ...data,
    submittedAt: new Date().toLocaleString(),
  };

  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: 'info@rightflowai.com',
    subject: contactEmailTemplate.getSubject(emailData),
    html: contactEmailTemplate.generateHtml(emailData),
  };

  await transport.sendMail(mailOptions);
}