"use client";

import { NavLink } from './nav-link';
import { Button } from '@/components/ui/button';
import { useCalendly } from '@/components/calendly/context';

export function NavMenu() {
  const { openCalendly } = useCalendly();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="/#services">Services</NavLink>
      <NavLink href="/#benefits">Benefits</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/#contact">Contact</NavLink>
      <Button 
        onClick={openCalendly}
        className="bg-[#2A4494] hover:bg-[#1A3484] transition-colors"
      >
        Book a Free Consultation
      </Button>
    </nav>
  );
}