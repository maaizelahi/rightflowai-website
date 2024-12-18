export function generateContactEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  businessType: string;
  challenge: string;
  preferredContact: string;
  company?: string;
}) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
    <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
    <p><strong>Business Type:</strong> ${data.businessType}</p>
    <p><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>
    <p><strong>Challenge/Task to Automate:</strong></p>
    <p>${data.challenge}</p>
  `;
}