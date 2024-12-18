"use client";

import { motion } from 'framer-motion';
import { ContactForm } from './form';
import { ContactInfo } from './info';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Automate Your Success</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Are you ready to reclaim your time and transform your business? I'm here to help you identify 
              opportunities for automation and implement solutions that deliver results.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}