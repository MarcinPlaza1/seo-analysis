"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIntersection } from "@/lib/utils/hooks/use-intersection";

export function FeatureShowcase() {
  const [ref, isVisible] = useIntersection();

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mb-16"
    >
      <Card className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Advanced SEO Analytics</h2>
            <p className="text-muted-foreground">
              Get deep insights into your website's SEO performance with our advanced
              analytics tools. Track rankings, monitor competitors, and identify
              opportunities for improvement.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Real-time ranking updates
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Competitor movement tracking
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Custom reporting dashboards
              </li>
            </ul>
            <Button>Learn More</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] bg-muted rounded-lg overflow-hidden"
          >
            {/* Add feature screenshot or demo here */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Feature Screenshot
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}