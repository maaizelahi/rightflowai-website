"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: April 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                RightFlow AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Company details</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.2 Technical Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about our services</li>
                <li>To improve our services and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">Under GDPR and CCPA, you have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For privacy-related inquiries, please contact us at:
                <br />
                Email: privacy@rightflowai.com
                <br />
                Address: [Company Address]
              </p>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}