"use client";

import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "SEO Master was established with a vision to democratize SEO"
  },
  {
    year: "2021",
    title: "First Major Release",
    description: "Launched our comprehensive SEO analysis platform"
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to serve customers in over 100 countries"
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Introduced advanced AI-powered SEO recommendations"
  }
];

export function AboutTimeline() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The key milestones that shaped SEO Master.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-8 mb-8 relative"
          >
            <div className="flex-none w-24 text-right">
              <span className="text-lg font-bold text-primary">{milestone.year}</span>
            </div>
            <div className="flex-1 pb-8 border-l-2 border-muted pl-8 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
              <h3 className="font-semibold mb-2">{milestone.title}</h3>
              <p className="text-muted-foreground">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}