"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketing Manager',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'This tool has transformed our SEO strategy. The insights are invaluable and the recommendations are always on point.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'SEO Specialist',
    company: 'Growth Digital',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'The most comprehensive SEO analysis tool I used. It saves hours of manual work and provides actionable insights.',
    rating: 5
  },
  {
    name: 'Emma Davis',
    role: 'Content Strategist',
    company: 'ContentLab',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'Incredible tool for content optimization. The keyword analysis and competitor insights are game-changing.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Trusted by SEO Professionals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what industry experts say about our SEO analysis tool
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
}