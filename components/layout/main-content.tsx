"use client";

import { MainTabs } from './main-tabs';
import { MainFeatures } from './main-features';
import { Benefits } from './sections/benefits';
import { HowItWorks } from './sections/how-it-works';
import { Testimonials } from './sections/testimonials';
import { Pricing } from './sections/pricing';
import { SEOAnalyzer } from '../seo/analyzer';
import { StrategyGuide } from '../seo/strategy-guide';
import { TrustedBy } from './sections/trusted-by';
import { IntegrationShowcase } from './sections/integration-showcase';
import { BlogHighlights } from './sections/blog-highlights';
import { FeatureComparison } from './sections/feature-comparison';
import { CTABanner } from './sections/cta-banner';
import { useMainContent } from '@/hooks/use-main-content';

export function MainContent() {
  const { activeTab, setActiveTab } = useMainContent();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <TrustedBy />
        <MainTabs activeTab={activeTab} onChange={setActiveTab} />
        {activeTab === 'analyzer' ? <SEOAnalyzer /> : <StrategyGuide />}
      </div>

      <MainFeatures />
      <HowItWorks />
      <Benefits />
      <IntegrationShowcase />
      <FeatureComparison />
      <Testimonials />
      <BlogHighlights />
      <CTABanner />
      <Pricing />
    </div>
  );
}