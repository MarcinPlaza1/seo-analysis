"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { FeatureRow } from './feature-row';
import { featureComparisonData } from '../data/feature-comparison-data';

export function FeatureComparisonGrid() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-4">
        {/* Header */}
        <div className="p-4 font-medium">Features</div>
        <div className="p-4 text-center font-medium bg-muted/50">Starter</div>
        <div className="p-4 text-center font-medium bg-primary/10">Professional</div>
        <div className="p-4 text-center font-medium bg-muted/50">Enterprise</div>

        {/* Features */}
        {featureComparisonData.map((feature, index) => (
          <FeatureRow 
            key={index}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </Card>
  );
}