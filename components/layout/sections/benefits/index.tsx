"use client";

import { BenefitCard } from './benefit-card';
import { BenefitHeader } from './benefit-header';
import { benefitData } from './benefit-data';

export function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <BenefitHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitData.map((benefit, index) => (
            <BenefitCard 
              key={index}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}