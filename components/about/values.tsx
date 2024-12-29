"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const values = [
  {
    title: "Innovation",
    description: "We continuously push the boundaries of SEO technology"
  },
  {
    title: "Transparency",
    description: "Clear, honest insights and recommendations"
  },
  {
    title: "Excellence",
    description: "Commitment to delivering the highest quality tools"
  },
  {
    title: "Customer Focus",
    description: "Your success is our success"
  }
];

export function AboutValues() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The principles that guide everything we do at SEO Master.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 text-center h-full">
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}