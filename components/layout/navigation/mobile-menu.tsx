"use client";

import { NavLink } from './nav-link';
import { Button } from '@/components/ui/button';
import { useCalendly } from '@/components/calendly/context';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const { openCalendly } = useCalendly();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t"
        >
          <nav className="flex flex-col space-y-4 py-4">
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/#benefits">Benefits</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <Button 
              onClick={openCalendly}
              className="bg-[#2A4494] hover:bg-[#1A3484] w-full transition-colors"
            >
              Book a Free Consultation
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}