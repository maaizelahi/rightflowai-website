import { sql } from '@vercel/postgres';
import { ContactRecord, ContactFormData, ContactStatus } from '@/lib/types/contact';

export async function createContact(data: Omit<ContactRecord, 'id' | 'createdAt'>) {
  const { name, email, message, company, ipAddress, status } = data;
  
  const result = await sql`
    INSERT INTO contacts (
      name, 
      email, 
      company,
      message, 
      ip_address,
      status,
      created_at
    ) 
    VALUES (
      ${name}, 
      ${email}, 
      ${company},
      ${message}, 
      ${ipAddress},
      ${status},
      NOW()
    )
    RETURNING *
  `;

  return result.rows[0];
}

export async function updateContactStatus(id: number, status: ContactStatus) {
  const result = await sql`
    UPDATE contacts 
    SET status = ${status}
    WHERE id = ${id}
    RETURNING *
  `;

  return result.rows[0];
}