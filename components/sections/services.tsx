"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Workflow, Bot, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCalendly } from '@/components/calendly/context';

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline your business operations and eliminate repetitive tasks.",
    features: [
      "Automated email responses and follow-ups",
      "Task management and deadline tracking",
      "Integration with CRMs and tools",
      "Custom workflow automation"
    ]
  },
  {
    icon: Bot,
    title: "Intelligent Agents",
    description: "Delegate time-consuming tasks to AI-powered assistants.",
    features: [
      "Virtual assistants for scheduling",
      "Automated data entry and reports",
      "Personalized client communication",
      "Research and data analysis"
    ]
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Chatbots",
    description: "Handle inquiries and support 24/7 with conversational AI.",
    features: [
      "Custom website chatbots",
      "Social media integrations",
      "Lead generation automation",
      "24/7 customer support"
    ]
  }
];

export function Services() {
  const { openCalendly } = useCalendly();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Solutions for Ambitious Solopreneurs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every solopreneur is unique. That's why our AI and automation solutions are customized to match your 
            specific business needs—whether you're a coach, content creator, course seller, or consultant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-[#00A6FB] mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-[#00A6FB] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            onClick={openCalendly}
            className="bg-[#2A4494] hover:bg-[#1A3484]"
          >
            Explore Custom AI Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}