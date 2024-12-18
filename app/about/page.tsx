"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useCalendly } from "@/components/calendly/context";
import Image from "next/image";
import { Code, Users, Target, Award } from "lucide-react";

export default function About() {
  const { openCalendly } = useCalendly();

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">
                Meet Maaiz Elahi: Your Partner in Automation Success
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hi, I'm Maaiz—a software developer turned solopreneur advocate. With years of experience 
                in software development and a deep understanding of AI technologies, I founded RightFlow AI 
                to help solopreneurs like you reclaim your time and scale your impact.
              </p>
              <Button 
                size="lg"
                onClick={openCalendly}
                className="bg-[#2A4494] hover:bg-[#1A3484]"
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/C4E03AQEDZlo1Y5yszQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1561376676457?e=1738195200&v=beta&t=YWhAfKF-KKbJ_yqb4GBqQA8PnCYzvw8xpX-pRaT13M4"
                alt="Maaiz Elahi"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Work with Me?</h2>
            <p className="text-xl text-gray-600">
              My approach combines technical expertise with a deep understanding of solopreneur challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Technical Expertise",
                description: "15+ years of software development experience"
              },
              {
                icon: Users,
                title: "Solopreneur Focus",
                description: "Specialized solutions for independent business owners"
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "Committed to delivering measurable time savings"
              },
              {
                icon: Award,
                title: "Personalized Support",
                description: "Direct collaboration with every client"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <value.icon className="h-12 w-12 text-[#00A6FB] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you save 20+ hours every month through intelligent automation.
            </p>
            <Button 
              size="lg"
              onClick={openCalendly}
              className="bg-[#2A4494] hover:bg-[#1A3484]"
            >
              Schedule Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}