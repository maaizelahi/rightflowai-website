"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyContextType {
  isOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CalendlyContext.Provider value={{ isOpen, openCalendly, closeCalendly }}>
      {children}
      <PopupModal
        url="https://calendly.com/rightflow-ai/demo"
        onModalClose={closeCalendly}
        open={isOpen}
        rootElement={document.getElementById('__next') as HTMLElement}
      />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error('useCalendly must be used within a CalendlyModalProvider');
  }
  return context;
}