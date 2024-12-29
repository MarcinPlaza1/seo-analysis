export interface PricingFeature {
  name: string;
  tooltip?: string;
  badge?: string;
}

export interface PricingTier {
  name: string;
  price: number;
  featured: boolean;
  description: string;
  features: PricingFeature[];
  billingOptions: {
    monthly: number;
    annual: number;
  };
}