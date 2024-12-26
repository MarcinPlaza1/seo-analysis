"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const stats = [
  { value: '50K+', label: 'Websites Analyzed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '200+', label: 'Countries Served' },
  { value: '24/7', label: 'Support Available' },
];

export function AboutStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}