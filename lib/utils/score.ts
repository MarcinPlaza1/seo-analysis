import type { SEOAnalysisResult } from '../types/seo';

export function calculateSEOScore(analysis: SEOAnalysisResult): number {
  let score = 0;
  
  // Title optimization (20 points)
  if (analysis.title.isOptimal) score += 20;
  
  // Description optimization (20 points)
  if (analysis.description.isOptimal) score += 20;
  
  // Heading structure (15 points)
  if (analysis.headings.h1Count === 1) score += 15;
  
  // Image optimization (15 points)
  if (analysis.images.withAlt / analysis.images.total > 0.8) score += 15;
  
  // Mobile optimization (30 points)
  if (analysis.mobile.isMobileResponsive) score += 30;
  
  return score;
}