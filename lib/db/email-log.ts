import { prisma } from './prisma';

export async function createEmailLog(data: {
  to: string;
  subject: string;
  body: string;
  status: string;
  error?: string;
}) {
  return prisma.emailLog.create({
    data,
  });
}

export async function getEmailLogs() {
  return prisma.emailLog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}