import { sql } from '@vercel/postgres';
import { ContactFormData } from '@/lib/types/contact';

export async function createContact(data: ContactFormData & {
  ipAddress: string;
  status: 'pending' | 'completed' | 'failed';
}) {
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