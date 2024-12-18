import nodemailer from "nodemailer";
import { generateContactEmailTemplate } from "./templates/contact";
import { ContactFormData } from "../types/contact";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.CONTACT_EMAIL_RECIPIENT,
    subject: `New Contact Form Submission from ${data.name}`,
    html: generateContactEmailTemplate(data),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}