"use client";

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}