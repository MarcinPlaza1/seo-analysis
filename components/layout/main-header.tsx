"use client";

import { Header } from './header';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function MainHeader() {
  return (
    <div className="border-b">
      <Header />
      <motion.div 
        className="container mx-auto px-4 py-16 sm:py-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Professional SEO Analysis{' '}
          <span className="text-primary">Made Simple</span>
        </motion.h1>
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Analyze your website's SEO performance and get expert recommendations to improve
          your search engine rankings. Our comprehensive analysis covers technical SEO,
          content optimization, and competitive insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="group">
            Start Free Analysis
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}