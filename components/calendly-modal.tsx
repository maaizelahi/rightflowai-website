"use client";

import { useCalendlyModal } from '@/hooks/use-calendly';

export function CalendlyModal() {
  const { CalendlyModal } = useCalendlyModal();
  return <CalendlyModal />;
}