"use client";

import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our priority. We work closely with you to understand your unique needs and challenges."
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Built on a foundation of transparency, security, and consistent delivery of results."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly evolving our solutions with the latest AI and automation technologies."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable time savings and business growth for our clients."
  }
];

export function Values() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-[#00A6FB]/10 p-3 rounded-lg">
              <value.icon className="h-8 w-8 text-[#00A6FB]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}