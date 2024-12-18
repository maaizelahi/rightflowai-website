"use client";

import { motion } from 'framer-motion';
import { Award, Code, Target, Users } from 'lucide-react';

const achievements = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "15+ years of software development and AI expertise",
    metric: "15+"
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Helping solopreneurs save thousands of hours",
    metric: "100+"
  },
  {
    icon: Target,
    title: "Time Saved",
    description: "Average monthly time savings for clients",
    metric: "20hrs"
  },
  {
    icon: Award,
    title: "Client Satisfaction",
    description: "Satisfaction rate from our clients",
    metric: "98%"
  }
];

export function Achievements() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <achievement.icon className="h-10 w-10 text-[#00A6FB]" />
            <span className="text-2xl font-bold text-[#2A4494]">{achievement.metric}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
          <p className="text-gray-600">{achievement.description}</p>
        </motion.div>
      ))}
    </div>
  );
}