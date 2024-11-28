"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useCalendly } from '@/components/calendly/context';

// Extract button variants into a separate component for better reusability
function HeroButton({
  onClick,
  variant = "default",
  children
}: {
  onClick: (e: React.MouseEvent) => void;
  variant?: "default" | "outline";
  children: React.ReactNode;
}) {
  return (
    <Button 
      size="lg" 
      variant={variant}
      className={variant === "default" ? "bg-[#2A4494] hover:bg-[#1A3484]" : ""}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function Hero() {
  const { openCalendly } = useCalendly();

  const handleDemoClick = (e: React.MouseEvent) => {
    // Prevent event from bubbling up to parent containers
    e.preventDefault();
    e.stopPropagation();
    openCalendly();
  };

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    // Prevent event from bubbling up to parent containers
    e.preventDefault();
    e.stopPropagation();
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#00A6FB] via-[#2A4494] to-[#1A3484] opacity-10" 
        aria-hidden="true"
      />
      
      {/* Main content container with proper z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Business with
            <span className="text-[#00A6FB] block">Intelligent Automation</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness the power of AI to streamline operations, enhance customer experience, 
            and drive growth with our cutting-edge automation solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButton onClick={handleDemoClick}>
              Schedule a Demo
            </HeroButton>
            <HeroButton 
              onClick={handleLearnMoreClick}
              variant="outline"
            >
              Learn More
            </HeroButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}