"use client";

import { MetaValidationResult } from '@/lib/types/seo/validation';
import { MetaTagsConfig } from '@/lib/types/seo/config';

export function validateMetaTags(meta: MetaTagsConfig): MetaValidationResult {
  const issues: string[] = [];
  const warnings: string[] = [];
  const titleIssues: string[] = [];
  const descriptionIssues: string[] = [];
  const socialIssues: string[] = [];

  // Title validation
  if (!meta.title.content) {
    titleIssues.push('Missing meta title');
  } else {
    if (meta.title.length < 50) {
      titleIssues.push('Meta title is too short (recommended: 50-60 characters)');
    } else if (meta.title.length > 60) {
      titleIssues.push('Meta title is too long (recommended: 50-60 characters)');
    }
    if (!/[a-zA-Z0-9]/.test(meta.title.content)) {
      titleIssues.push('Title should contain alphanumeric characters');
    }
    if (meta.title.content.toLowerCase().includes('untitled')) {
      titleIssues.push('Title contains generic text "untitled"');
    }
    if (meta.title.content.split('|').length > 2) {
      warnings.push('Title contains multiple separators');
    }
  }

  // Description validation
  if (!meta.description.content) {
    descriptionIssues.push('Missing meta description');
  } else {
    if (meta.description.length < 150) {
      descriptionIssues.push('Meta description is too short (recommended: 150-160 characters)');
    } else if (meta.description.length > 160) {
      descriptionIssues.push('Meta description is too long (recommended: 150-160 characters)');
    }
    if (meta.description.content === meta.title.content) {
      descriptionIssues.push('Description is identical to title');
    }
    if (!/[.!?]$/.test(meta.description.content)) {
      warnings.push('Description should end with punctuation');
    }
  }

  // Open Graph validation
  if (!meta.openGraph.title || !meta.openGraph.description || !meta.openGraph.image) {
    socialIssues.push('Missing Open Graph tags');
  } else {
    if (!meta.openGraph.type) {
      socialIssues.push('Missing og:type');
    }
    if (!meta.openGraph.url) {
      socialIssues.push('Missing og:url');
    }
    if (!meta.openGraph.siteName) {
      warnings.push('Missing og:site_name');
    }
    if (!meta.openGraph.image.startsWith('https://')) {
      socialIssues.push('Open Graph image should use HTTPS');
    }
  }

  // Twitter Card validation
  if (!meta.twitter.card || !meta.twitter.title || !meta.twitter.description || !meta.twitter.image) {
    socialIssues.push('Missing Twitter Card tags');
  } else {
    if (!['summary', 'summary_large_image', 'app', 'player'].includes(meta.twitter.card)) {
      socialIssues.push('Invalid Twitter card type');
    }
    if (!meta.twitter.site && !meta.twitter.creator) {
      warnings.push('Missing Twitter account attribution');
    }
    if (!meta.twitter.image.startsWith('https://')) {
      socialIssues.push('Twitter image should use HTTPS');
    }
  }

  return {
    isValid: titleIssues.length === 0 && descriptionIssues.length === 0 && socialIssues.length === 0,
    score: calculateMetaScore(meta, titleIssues, descriptionIssues, socialIssues),
    issues: [...titleIssues, ...descriptionIssues, ...socialIssues],
    warnings,
    titleIssues,
    descriptionIssues,
    socialIssues,
  };
}

function calculateMetaScore(
  meta: MetaTagsConfig,
  titleIssues: string[],
  descriptionIssues: string[],
  socialIssues: string[]
): number {
  let score = 100;
  
  // Title scoring (40 points)
  if (titleIssues.length > 0) {
    score -= 40 * (titleIssues.length / 3);
  } else if (meta.title.isOptimal) {
    score += 10;
  }

  // Description scoring (30 points)
  if (descriptionIssues.length > 0) {
    score -= 30 * (descriptionIssues.length / 3);
  } else if (meta.description.isOptimal) {
    score += 10;
  }

  // Social media scoring (30 points)
  if (socialIssues.length > 0) {
    score -= 30 * (socialIssues.length / 6);
  }

  return Math.max(0, Math.min(100, score));
}