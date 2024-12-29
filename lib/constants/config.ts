export const SITE_CONFIG = {
  name: 'SEO Master',
  description: 'Professional SEO Analysis Tool',
  url: 'https://seomaster.com',
  ogImage: 'https://seomaster.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/seomaster',
    github: 'https://github.com/seomaster'
  }
} as const;

export const PRICING_CONFIG = {
  currency: 'USD',
  annualDiscount: 0.2, // 20% discount
  trial: {
    days: 14,
    features: ['Basic Analysis', 'Core Features', 'Email Support']
  }
} as const;

export const SEO_LIMITS = {
  titleLength: { min: 50, max: 60 },
  descriptionLength: { min: 150, max: 160 },
  keywordDensity: { min: 0.5, max: 3.0 }
} as const;