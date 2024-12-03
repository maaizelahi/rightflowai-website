import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company: string;
  subject?: string;
}

export async function sendContactEmail(data: EmailData) {
  const {
    name,
    email,
    phone,
    message,
    company,
    subject = "New Contact Form Submission",
  } = data;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.CONTACT_EMAIL_RECIPIENT,
    subject,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
