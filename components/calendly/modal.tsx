'use client';

import { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="calendly-modal-root">
      <PopupModal
        url="https://calendly.com/rightflowai/30min"
        onModalClose={onClose}
        open={isOpen}
        rootElement={
          document.getElementById('calendly-modal-root') as HTMLElement
        }
      />
    </div>
  );
}
