"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Clock, Users, Zap, ArrowUpRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: BarChart3,
    title: "Increased Efficiency",
    description: "Boost operational efficiency by up to 80% through intelligent automation",
    metric: "80%"
  },
  {
    icon: Zap,
    title: "Reduced Costs",
    description: "Cut operational costs by automating repetitive tasks",
    metric: "40%"
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Save hundreds of work hours monthly with automated workflows",
    metric: "200hrs"
  },
  {
    icon: Users,
    title: "Enhanced Experience",
    description: "Improve customer satisfaction with 24/7 intelligent support",
    metric: "95%"
  },
  {
    icon: ArrowUpRight,
    title: "Scalability",
    description: "Easily scale operations without proportional cost increase",
    metric: "∞"
  },
  {
    icon: Activity,
    title: "24/7 Availability",
    description: "Provide round-the-clock service with automated systems",
    metric: "100%"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RightFlow AI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the transformative power of AI automation with measurable results
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <benefit.icon className="h-8 w-8 text-[#00A6FB]" />
                    <span className="text-2xl font-bold text-[#2A4494]">{benefit.metric}</span>
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#00A6FB] opacity-5 rounded-full -mr-8 -mt-8" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}