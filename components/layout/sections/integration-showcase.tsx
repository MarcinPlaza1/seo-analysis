"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function IntegrationShowcase() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect SEO Master with your favorite tools and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Google Analytics",
              description: "Track your SEO performance impact on traffic and conversions",
              action: "Connect"
            },
            {
              title: "Google Search Console",
              description: "Import search data and monitor your search presence",
              action: "Connect"
            },
            {
              title: "WordPress",
              description: "Optimize your WordPress site with our plugin",
              action: "Install Plugin"
            }
          ].map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <h3 className="font-semibold mb-2">{integration.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>
                <Button variant="outline" size="sm" className="group">
                  {integration.action}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}