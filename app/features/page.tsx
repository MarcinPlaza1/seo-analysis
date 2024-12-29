"use client";

import { PageContainer } from '@/components/layout/page-container';
import { FeatureHero } from '@/components/features/feature-hero';
import { FeatureGrid } from '@/components/features/feature-grid';
import { FeatureTabs } from '@/components/features/feature-tabs';
import { FeatureShowcase } from '@/components/features/feature-showcase';
import { FeatureComparison } from '@/components/features/feature-comparison';

export default function FeaturesPage() {
  return (
    <PageContainer>
      <FeatureHero />
      <FeatureTabs />
      <FeatureGrid />
      <FeatureShowcase />
      <FeatureComparison />
    </PageContainer>
  );
}