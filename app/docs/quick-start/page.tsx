"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Steps } from '@/components/docs/steps';

export default function QuickStartPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Quick Start Guide</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          Get started with SEO Master in just a few minutes. Follow these simple steps
          to begin analyzing your website's SEO performance.
        </p>

        <Steps
          steps={[
            {
              title: "Enter Your URL",
              description: "Start by entering your website URL in the analysis tool."
            },
            {
              title: "Run Analysis",
              description: "Click 'Analyze' to start the comprehensive SEO analysis."
            },
            {
              title: "Review Results",
              description: "Review your SEO score and detailed recommendations."
            },
            {
              title: "Implement Changes",
              description: "Follow the suggestions to improve your SEO performance."
            }
          ]}
        />

        <Card className="p-6 my-8">
          <h3 className="text-xl font-semibold mb-4">Example Usage</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Enter your website URL
const url = "https://example.com";

// Run the analysis
const results = await analyze(url);

// Review the results
console.log(results.score);
console.log(results.recommendations);`}</code>
          </pre>
        </Card>
      </div>
    </motion.div>
  );
}