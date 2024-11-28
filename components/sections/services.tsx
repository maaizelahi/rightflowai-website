"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Bot, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: MessageSquare,
    title: "Custom Chatbot Development",
    description: "AI-powered chatbots tailored to your business needs with natural language processing capabilities.",
    features: [
      "24/7 customer support automation",
      "Natural language understanding",
      "Multi-platform integration",
      "Custom workflow implementation"
    ]
  },
  {
    icon: Bot,
    title: "Automated Agent Development",
    description: "Intelligent virtual agents that handle complex tasks with machine learning-powered decision making.",
    features: [
      "Smart decision making",
      "Process automation",
      "Seamless integration",
      "Scalable architecture"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation with custom workflow design and implementation.",
    features: [
      "Custom workflow design",
      "System integration",
      "Performance monitoring",
      "Process optimization"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}