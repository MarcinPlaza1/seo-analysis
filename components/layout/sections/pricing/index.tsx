"use client";

import { PricingHeader } from './pricing-header';
import { PricingTiers } from './pricing-tiers';
import { SectionContainer } from '../shared/section-container';

export function Pricing() {
  return (
    <SectionContainer id="pricing" background="muted">
      <PricingHeader />
      <PricingTiers />
    </SectionContainer>
  );
}