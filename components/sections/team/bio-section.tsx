"use client";

import { motion } from 'framer-motion';

export function BioSection() {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A6FB] opacity-5 rounded-full -mr-32 -mt-32" />
        <p className="text-lg text-gray-600 leading-relaxed relative z-10">
          A pioneering force in AI automation and digital transformation, Maaiz brings over 15 years of expertise in 
          revolutionizing business operations through intelligent technology solutions. As the founder of RightFlow AI, 
          he has successfully led numerous Fortune 500 companies through their digital evolution, implementing 
          cutting-edge AI solutions that drive efficiency and growth. His unique approach combines deep technical 
          knowledge with strategic business acumen, ensuring our clients receive solutions that not only leverage 
          the latest in AI technology but also deliver measurable business value.
        </p>
      </div>
    </motion.div>
  );
}