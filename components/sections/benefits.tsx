"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Zap, Target, Users, ArrowUpRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCalendly } from '@/components/calendly/context';

const benefits = [
  {
    icon: Clock,
    title: "Save Precious Time",
    description: "Reclaim 20+ hours every month through intelligent automation",
    metric: "20+ hrs"
  },
  {
    icon: Zap,
    title: "Boost Efficiency",
    description: "Eliminate repetitive tasks and streamline operations",
    metric: "80%"
  },
  {
    icon: Target,
    title: "Focus on Growth",
    description: "Spend more time on strategic activities that matter",
    metric: "3x"
  },
  {
    icon: Users,
    title: "Scale Without Hiring",
    description: "Grow your business without expanding your team",
    metric: "∞"
  },
  {
    icon: ArrowUpRight,
    title: "Increase Revenue",
    description: "Convert more leads with 24/7 automated support",
    metric: "40%"
  },
  {
    icon: Activity,
    title: "Work Smarter",
    description: "Let AI handle routine tasks while you focus on strategy",
    metric: "24/7"
  }
];

export function Benefits() {
  const { openCalendly } = useCalendly();

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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Time, Reimagined</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              As a solopreneur, you juggle everything. With AI-powered automation, intelligent agents, and chatbots, 
              you can eliminate the mundane and focus on what truly matters - growing your business and making an impact.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            Start Saving Time Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}