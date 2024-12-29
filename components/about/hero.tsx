"use client";

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Search className="h-8 w-8 text-primary" />
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        About SEO Master
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        We're on a mission to make professional SEO analysis accessible to everyone.
        Our platform combines advanced technology with user-friendly design to help
        businesses improve their online visibility.
      </p>
    </motion.div>
  );
}