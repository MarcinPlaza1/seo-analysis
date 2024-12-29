"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Target, Users, Zap } from 'lucide-react';

export function AboutMission() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We aim to democratize SEO by providing professional-grade tools and insights
          that help businesses of all sizes succeed online.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Target,
            title: "Empower Growth",
            description: "Help businesses achieve better search engine rankings and drive organic traffic"
          },
          {
            icon: Users,
            title: "Accessible to All",
            description: "Make professional SEO tools accessible to businesses of all sizes"
          },
          {
            icon: Zap,
            title: "Drive Innovation",
            description: "Continuously improve our platform with the latest SEO technologies"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}