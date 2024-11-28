"use client";

import { useState, useCallback } from 'react';
import { PopupModal } from 'react-calendly';

export function useCalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsOpen(false);
  }, []);

  const CalendlyModal = useCallback(() => {
    return (
      <PopupModal
        url="https://calendly.com/rightflow-ai/demo"
        onModalClose={closeCalendly}
        open={isOpen}
        rootElement={document.getElementById('__next') as HTMLElement}
      />
    );
  }, [isOpen, closeCalendly]);

  return {
    isOpen,
    openCalendly,
    closeCalendly,
    CalendlyModal,
  };
}