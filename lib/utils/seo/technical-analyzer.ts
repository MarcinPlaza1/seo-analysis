import { SEOTechnicalAnalysis } from '@/lib/types/seo/technical';

export function analyzeTechnical(doc: Document, url: string): SEOTechnicalAnalysis {
  return {
    mobile: analyzeMobileOptimization(doc),
    performance: analyzePerformance(),
    security: analyzeSecurity(url),
  };
}

function analyzeMobileOptimization(doc: Document) {
  return {
    isMobileResponsive: !!doc.querySelector('meta[name="viewport"]'),
    viewport: true,
    textReadability: true,
  };
}

function analyzePerformance() {
  return {
    loadTime: 0,
    size: 0,
    requests: 0,
  };
}

function analyzeSecurity(url: string) {
  return {
    https: url.startsWith('https'),
    hsts: false,
    mixedContent: false,
  };
}