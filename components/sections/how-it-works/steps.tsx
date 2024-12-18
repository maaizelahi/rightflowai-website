"use client";

import { motion } from 'framer-motion';
import { Search, Wrench, ChartLine } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discover Your Needs",
    description: "Book a free consultation where we identify the repetitive tasks and bottlenecks consuming your time."
  },
  {
    icon: Wrench,
    title: "Design Your Custom Solution",
    description: "We craft tailored AI workflows, agents, and chatbots that fit your business perfectly."
  },
  {
    icon: ChartLine,
    title: "Implement and Optimize",
    description: "From setup to continuous improvement, we ensure your automation delivers maximum results."
  }
];

export function Steps() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg relative z-10">
            <div className="bg-[#00A6FB]/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
              <step.icon className="h-8 w-8 text-[#00A6FB]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-[#00A6FB]/10 transform translate-x-1/2">
              <div className="absolute top-1/2 right-0 w-3 h-3 bg-[#00A6FB] rounded-full transform -translate-y-1/2" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}