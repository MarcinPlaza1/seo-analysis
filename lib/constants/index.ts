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

export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact',
  DASHBOARD: '/dashboard',
  DOCS: '/docs',
  API: '/api',
  BLOG: '/blog',
  SUPPORT: '/support'
} as const;

export const API_ENDPOINTS = {
  ANALYZE: '/api/analyze',
  KEYWORDS: '/api/keywords',
  COMPETITORS: '/api/competitors'
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const TRANSITIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const Z_INDEX = {
  modal: 100,
  overlay: 90,
  dropdown: 80,
  header: 70,
  footer: 60,
} as const;

export const SEO_LIMITS = {
  titleLength: { min: 50, max: 60 },
  descriptionLength: { min: 150, max: 160 },
  keywordDensity: { min: 0.5, max: 3.0 }
} as const;