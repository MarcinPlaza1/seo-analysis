"use client";

import { URLAnalysis } from '@/lib/types/seo/url';

export function analyzeUrlStructure(url: string): URLAnalysis {
  const parsedUrl = new URL(url);
  
  const segments = parsedUrl.pathname.split('/').filter(Boolean);
  const queryParams = Array.from(parsedUrl.searchParams.entries());
  
  return {
    protocol: parsedUrl.protocol,
    hostname: parsedUrl.hostname,
    path: {
      full: parsedUrl.pathname,
      segments,
      depth: segments.length,
    },
    query: {
      params: Object.fromEntries(queryParams),
      count: queryParams.length,
    },
    validation: validateUrlStructure(parsedUrl, segments, queryParams),
  };
}

function validateUrlStructure(
  url: URL,
  segments: string[],
  queryParams: Array<[string, string]>
): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check HTTPS
  if (url.protocol !== 'https:') {
    issues.push('URL should use HTTPS protocol');
  }

  // Check URL length
  if (url.href.length > 75) {
    issues.push('URL is too long (recommended: max 75 characters)');
  }

  // Check segments
  segments.forEach(segment => {
    if (segment.includes('_')) {
      issues.push('URL contains underscores (use hyphens instead)');
    }
    if (segment.length > 30) {
      issues.push(`Segment "${segment}" is too long`);
    }
    if (/[A-Z]/.test(segment)) {
      issues.push('URL contains uppercase characters');
    }
  });

  // Check query parameters
  if (queryParams.length > 0) {
    issues.push('URL contains query parameters (consider using clean URLs)');
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}