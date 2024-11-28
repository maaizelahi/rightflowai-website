"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsOfService() {
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
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: April 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using RightFlow AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. User Eligibility</h2>
              <p className="text-gray-700 mb-4">
                You must be at least 18 years old and have the legal authority to enter into this agreement to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
              <h3 className="text-xl font-medium mb-3">3.1 You agree not to:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use the services for any illegal purpose</li>
                <li>Violate any intellectual property rights</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of our services are owned by RightFlow AI and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                RightFlow AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Account Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any violation of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the laws of [Jurisdiction].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms, please contact us at:
                <br />
                Email: legal@rightflowai.com
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