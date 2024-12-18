"use client";

import { useState, useEffect } from 'react';

export function useScrollSpy(sections: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const { top, bottom } = element.getBoundingClientRect();
        return scrollPosition >= top && scrollPosition < bottom;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
}