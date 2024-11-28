"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useCalendly } from '@/components/calendly/context';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCalendly } = useCalendly();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-[#2A4494]" />
              <span className="font-bold text-xl">RightFlow AI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Button 
              className="bg-[#2A4494] hover:bg-[#1A3484]"
              onClick={openCalendly}
            >
              Get Started
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Button 
                className="bg-[#2A4494] hover:bg-[#1A3484] w-full"
                onClick={openCalendly}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}