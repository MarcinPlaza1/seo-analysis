"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { featureData } from "./feature-data";
import { useIntersection } from "@/lib/utils/hooks/use-intersection";

export function FeatureGrid() {
  const [ref, isVisible] = useIntersection();

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
    >
      {featureData.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.capabilities.map((capability, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {capability}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}