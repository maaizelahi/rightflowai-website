'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss how we can
              help.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Company Name" />
                  <Textarea
                    placeholder="Tell us about your project"
                    className="h-32"
                  />
                </div>
                <Button className="w-full bg-[#2A4494] hover:bg-[#1A3484]">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
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
                {/* <div className="flex items-center space-x-4">
                  <div className="bg-[#00A6FB]/10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-[#00A6FB]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Live Chat</p>
                    <p className="font-medium">Available 24/7</p>
                  </div>
                </div> */}
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
                    Most implementations take 2-4 weeks, depending on complexity
                    and requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">
                    Do you offer custom solutions?
                  </h4>
                  <p className="text-gray-600">
                    Yes, all our solutions are customized to meet your specific
                    business needs and objectives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}