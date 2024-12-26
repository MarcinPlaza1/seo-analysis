"use client";

import { motion } from 'framer-motion';

export function TestimonialHeader() {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Trusted by SEO Professionals
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        See what industry experts say about our SEO analysis tool
      </p>
    </motion.div>
  );
}