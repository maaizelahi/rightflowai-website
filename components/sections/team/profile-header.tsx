'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfileHeader() {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-[#00A6FB] rounded-full opacity-10 transform -rotate-6" />
        <div className="relative w-full h-full">
          <Image
            src="https://media.licdn.com/dms/image/v2/C4E03AQEDZlo1Y5yszQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1561376676457?e=1738195200&v=beta&t=YWhAfKF-KKbJ_yqb4GBqQA8PnCYzvw8xpX-pRaT13M4"
            alt="Maaiz Elahi"
            fill
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Maaiz Elahi</h2>
      {/* <p className="text-xl text-[#00A6FB]">Founder & CEO</p> */}
    </motion.div>
  );
}
