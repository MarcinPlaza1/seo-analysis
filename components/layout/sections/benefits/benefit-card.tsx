"use client";

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  benefit: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = benefit.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover:shadow-md transition-shadow">
        <Icon className="h-8 w-8 text-primary mb-4" />
        <h3 className="font-semibold mb-2">{benefit.title}</h3>
        <p className="text-sm text-muted-foreground">{benefit.description}</p>
      </Card>
    </motion.div>
  );
}