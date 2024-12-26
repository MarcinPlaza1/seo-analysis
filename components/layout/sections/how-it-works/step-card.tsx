"use client";

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  step: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
  isLast: boolean;
}

export function StepCard({ step, index, isLast }: StepCardProps) {
  const Icon = step.icon;
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full text-center">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="font-semibold mb-2">{step.title}</h3>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </Card>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <ArrowIcon />
        </div>
      )}
    </motion.div>
  );
}