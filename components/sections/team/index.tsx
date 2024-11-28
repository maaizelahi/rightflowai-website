"use client";

import { motion } from 'framer-motion';
import { ProfileHeader } from './profile-header';
import { BioSection } from './bio-section';

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionary minds behind RightFlow AI, driving innovation and excellence in AI automation solutions.
          </p>
        </motion.div>

        <ProfileHeader />
        <BioSection />
      </div>
    </section>
  );
}