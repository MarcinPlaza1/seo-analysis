"use client";

import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export function Steps({ steps }: StepsProps) {
  return (
    <div className="space-y-4 my-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex-none">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {index + 1}
            </div>
          </div>
          <div>
            <h3 className="font-medium">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}