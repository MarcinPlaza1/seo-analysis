"use client";

import { motion } from 'framer-motion';

export function StepHeader() {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        How It Works
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Get started with SEO Master in three simple steps
      </p>
    </motion.div>
  );
}