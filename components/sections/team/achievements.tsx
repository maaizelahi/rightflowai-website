"use client";

import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: Briefcase,
    title: "Career Milestones",
    items: [
      "Led digital transformation initiatives for Fortune 500 companies",
      "Developed enterprise-scale AI solutions",
      "Successfully launched multiple tech startups"
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Master's in Computer Science",
      "Bachelor's in Software Engineering",
      "Multiple certifications in AI and Cloud Technologies"
    ]
  },
  {
    icon: Trophy,
    title: "Recognition",
    items: [
      "Tech Innovator of the Year 2022",
      "AI Excellence Award",
      "Industry Leadership Recognition"
    ]
  }
];

export function Achievements() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center mb-4">
            <achievement.icon className="h-8 w-8 text-[#00A6FB] mr-3" />
            <h3 className="text-xl font-semibold">{achievement.title}</h3>
          </div>
          <ul className="space-y-2">
            {achievement.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="h-1.5 w-1.5 bg-[#00A6FB] rounded-full mr-2 mt-2" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}