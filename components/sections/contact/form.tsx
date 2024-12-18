"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FormFields } from './form-fields';
import { useContactForm } from '@/lib/hooks/use-contact-form';
import { useCalendly } from '@/components/calendly/context';

export function ContactForm() {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();
  const { openCalendly } = useCalendly();

  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    openCalendly();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormFields formData={formData} onChange={handleInputChange} />
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              className="flex-1 bg-[#2A4494] hover:bg-[#1A3484]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Message'}
            </Button>
            <Button
              type="button"
              onClick={handleConsultation}
              variant="outline"
              className="flex-1"
              disabled={isSubmitting}
            >
              Schedule Consultation
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}