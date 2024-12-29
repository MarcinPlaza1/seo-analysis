"use client";

import { StepCard } from './step-card';
import { StepHeader } from './step-header';
import { stepData } from './step-data';

export function HowItWorks() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <StepHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepData.map((step, index) => (
            <StepCard 
              key={index}
              step={step}
              index={index}
              isLast={index === stepData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}