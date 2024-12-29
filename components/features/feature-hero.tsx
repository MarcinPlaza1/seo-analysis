"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeatureHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Powerful SEO Features
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        Discover all the tools and features that make SEO Master the most comprehensive
        SEO analysis platform. From keyword research to technical SEO, we've got you covered.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg">
          Try It Free
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          View Demo
        </Button>
      </div>
    </motion.div>
  );
}