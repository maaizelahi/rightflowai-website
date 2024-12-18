"use client";

import { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { NavMenu } from './navigation/nav-menu';
import { MobileMenu } from './navigation/mobile-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <Brain className="h-8 w-8 text-[#2A4494] rotate-90" />
            <span className="font-bold text-xl">RightFlow AI</span>
          </Link>

          <NavMenu />

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </header>
  );
}