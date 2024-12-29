"use client";

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    rating: number;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12">
            <img src={testimonial.image} alt={testimonial.name} />
          </Avatar>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
      </Card>
    </motion.div>
  );
}