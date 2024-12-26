"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function MainCTA() {
  return (
    <motion.div 
      className="bg-primary text-primary-foreground py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Ready to Improve Your SEO?
        </motion.h2>
        
        <motion.p 
          className="text-primary-foreground/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Start analyzing your website now and get actionable insights to improve
          your search engine rankings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            variant="secondary" 
            size="lg"
            className="group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Start Analysis
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}