"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FormFields } from './form-fields';
import { useContactForm } from '@/lib/hooks/use-contact-form';

export function ContactForm() {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

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
          <Button
            type="submit"
            className="w-full bg-[#2A4494] hover:bg-[#1A3484]"
            disabled={isSubmitting}
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}