"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useCalendly } from '@/components/calendly/context';

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
    e.preventDefault();
    e.stopPropagation();
    openCalendly();
  };

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#00A6FB] via-[#2A4494] to-[#1A3484] opacity-10" 
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1 
            className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Solopreneurs to Save
            <span className="text-[#00A6FB] block">20+ Hours/Month with AI</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            As a solopreneur, your time is precious. I help you reclaim your day by automating repetitive tasks, 
            deploying intelligent agents, and integrating smart chatbots—so you can focus on growing your business 
            and realizing their vision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButton onClick={handleDemoClick}>
              Schedule a Free Consultation
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