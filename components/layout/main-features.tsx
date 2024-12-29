"use client";

import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart2, 
  Zap, 
  Globe,
  Smartphone,
  FileText
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Keyword Analysis',
    description: 'Discover high-performing keywords and optimize your content strategy'
  },
  {
    icon: BarChart2,
    title: 'Performance Tracking',
    description: 'Monitor your SEO progress with detailed analytics and insights'
  },
  {
    icon: Zap,
    title: 'Quick Analysis',
    description: 'Get instant SEO analysis and actionable recommendations'
  },
  {
    icon: Globe,
    title: 'Competitor Analysis',
    description: 'Compare your site with competitors and find opportunities'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure your site performs well on all devices'
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description: 'Generate comprehensive SEO reports for your clients'
  }
];

export function MainFeatures() {
  return (
    <div className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Comprehensive SEO Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to improve your website's search engine visibility
            and drive more organic traffic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}