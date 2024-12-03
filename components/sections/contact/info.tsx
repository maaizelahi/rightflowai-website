"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-[#00A6FB]/10 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-[#00A6FB]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">info@rightflowai.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#00A6FB]/10 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-[#00A6FB]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">+91 9686011021</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">
              How quickly can you implement a solution?
            </h4>
            <p className="text-gray-600">
              Most implementations take 2-4 weeks, depending on complexity and
              requirements.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Do you offer custom solutions?</h4>
            <p className="text-gray-600">
              Yes, all our solutions are customized to meet your specific
              business needs and objectives.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
