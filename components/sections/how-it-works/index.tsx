"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCalendly } from '@/components/calendly/context';
import { Steps } from './steps';

export function HowItWorks() {
  const { openCalendly } = useCalendly();

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Save You 20+ Hours a Month
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process helps you identify, implement, and optimize the perfect automation 
              solution for your business.
            </p>
          </motion.div>
        </div>

        <Steps />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            onClick={openCalendly}
            className="bg-[#2A4494] hover:bg-[#1A3484]"
          >
            Schedule Your Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}