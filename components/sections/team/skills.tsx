"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Architecture",
  "Enterprise Solutions",
  "Digital Transformation",
  "Team Leadership",
  "Strategic Planning",
  "Innovation Management"
];

export function Skills() {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-sm py-1 px-3 bg-[#00A6FB]/10 text-[#00A6FB] hover:bg-[#00A6FB]/20"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}