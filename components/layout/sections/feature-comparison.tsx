"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { featureComparisonData } from './data/feature-comparison-data';

export function FeatureComparison() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-4">
            {/* Header */}
            <div className="p-4 font-medium">Features</div>
            <div className="p-4 text-center font-medium bg-muted/50">Starter</div>
            <div className="p-4 text-center font-medium bg-primary/10">Professional</div>
            <div className="p-4 text-center font-medium bg-muted/50">Enterprise</div>

            {/* Features */}
            {featureComparisonData.map((feature, index) => (
              <React.Fragment key={index}>
                <div className={cn("p-4", index % 2 === 0 && "bg-muted/30")}>
                  {feature.name}
                </div>
                <div className={cn("p-4 flex justify-center", index % 2 === 0 && "bg-muted/30")}>
                  {feature.starter ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className={cn("p-4 flex justify-center", index % 2 === 0 && "bg-muted/30")}>
                  {feature.pro ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className={cn("p-4 flex justify-center", index % 2 === 0 && "bg-muted/30")}>
                  {feature.enterprise ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}