"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersection } from "@/lib/utils/hooks/use-intersection";

const features = [
  { name: "Keyword Research", starter: true, pro: true, enterprise: true },
  { name: "Technical SEO Analysis", starter: true, pro: true, enterprise: true },
  { name: "Content Optimization", starter: true, pro: true, enterprise: true },
  { name: "Competitor Analysis", starter: false, pro: true, enterprise: true },
  { name: "API Access", starter: false, pro: true, enterprise: true },
  { name: "White Label Reports", starter: false, pro: false, enterprise: true },
  { name: "Custom Integration", starter: false, pro: false, enterprise: true },
  { name: "Priority Support", starter: false, pro: true, enterprise: true },
];

export function FeatureComparison() {
  const [ref, isVisible] = useIntersection();

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            <TableHead>Starter</TableHead>
            <TableHead>Professional</TableHead>
            <TableHead>Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell>{feature.name}</TableCell>
              <TableCell>
                {feature.starter ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
              <TableCell>
                {feature.pro ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
              <TableCell>
                {feature.enterprise ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}