"use client";

import React from 'react';
import { FeatureComparisonHeader } from './feature-comparison-header';
import { FeatureComparisonGrid } from './feature-comparison-grid';

export function FeatureComparison() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <FeatureComparisonHeader />
        <FeatureComparisonGrid />
      </div>
    </section>
  );
}