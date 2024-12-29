"use client";

import { TechnicalSEOAnalysis } from '@/lib/types/seo/technical';
import { analyzeMetaTags } from './meta';
import { analyzePerformance } from './performance';
import { analyzeMobileOptimization } from './mobile';
import { analyzeSecurityHeaders } from './security';

export async function analyzeTechnicalSEO(url: string): Promise<TechnicalSEOAnalysis> {
  const response = await fetch(url);
  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');

  return {
    meta: analyzeMetaTags(doc),
    performance: await analyzePerformance(url),
    mobile: analyzeMobileOptimization(doc),
    security: await analyzeSecurityHeaders(url),
    validation: {
      isValid: true, // Will be updated based on analysis
      issues: [],
      warnings: [],
    },
  };
}