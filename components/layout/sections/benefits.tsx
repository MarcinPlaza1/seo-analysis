"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  Target, 
  LineChart,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Improve Rankings',
    description: 'Boost your search engine rankings with data-driven insights and recommendations'
  },
  {
    icon: Target,
    title: 'Target Keywords',
    description: 'Identify and optimize for the most valuable keywords in your industry'
  },
  {
    icon: LineChart,
    title: 'Track Progress',
    description: 'Monitor your SEO performance over time with detailed analytics'
  },
  {
    icon: Users,
    title: 'Beat Competition',
    description: 'Analyze competitors and find opportunities to outrank them'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate your SEO analysis and focus on implementation'
  },
  {
    icon: Shield,
    title: 'Stay Updated',
    description: 'Keep up with the latest SEO best practices and algorithm changes'
  }
];

export function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose SEO Master?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our tool can help you achieve better search engine rankings
            and drive more organic traffic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <benefit.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}