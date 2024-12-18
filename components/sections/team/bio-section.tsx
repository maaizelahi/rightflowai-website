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
          Hi, I'm Maaiz Elahi—a software developer turned solopreneur advocate. With over 15 years of experience 
          in software development and a deep understanding of AI technologies, I founded RightFlow AI to help 
          solopreneurs like you reclaim your time and scale your impact. Being a solopreneur myself, I understand 
          the challenges you face—wearing multiple hats, juggling tasks, and feeling like there's never enough time. 
          My mission is to free you from repetitive tasks, so you can focus on growing your business and living 
          your passion.
        </p>
      </div>
    </motion.div>
  );
}