"use client";

import { TestimonialCard } from './testimonial-card';
import { TestimonialHeader } from './testimonial-header';
import { testimonialData } from './testimonial-data';

export function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <TestimonialHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}