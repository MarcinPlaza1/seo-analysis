"use client";

import { MetaTagsAnalysis } from '@/lib/types/seo/meta';

export function analyzeMetaTags(doc: Document): MetaTagsAnalysis {
  const title = extractTitle(doc);
  const description = extractDescription(doc);
  const keywords = extractKeywords(doc);
  const canonical = extractCanonical(doc);
  const robots = extractRobots(doc);

  return {
    title: {
      content: title,
      length: title.length,
      isOptimal: title.length >= 50 && title.length <= 60,
      hasBrand: title.includes('|') || title.includes('-'),
    },
    description: {
      content: description,
      length: description.length,
      isOptimal: description.length >= 150 && description.length <= 160,
      hasKeywords: keywords.some(kw => description.toLowerCase().includes(kw.toLowerCase())),
    },
    keywords: {
      list: keywords,
      density: calculateKeywordDensity(doc.body.textContent || '', keywords),
      inTitle: keywords.filter(kw => title.toLowerCase().includes(kw.toLowerCase())),
      inDescription: keywords.filter(kw => description.toLowerCase().includes(kw.toLowerCase())),
    },
    canonical: {
      url: canonical,
      isValid: isValidUrl(canonical),
    },
    robots: {
      content: robots,
      isIndexable: !robots.includes('noindex'),
      isFollowable: !robots.includes('nofollow'),
    },
  };
}

function extractTitle(doc: Document): string {
  return doc.querySelector('title')?.textContent || '';
}

function extractDescription(doc: Document): string {
  return doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
}

function extractKeywords(doc: Document): string[] {
  const keywordsContent = doc.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
  return keywordsContent.split(',').map(k => k.trim()).filter(Boolean);
}

function extractCanonical(doc: Document): string {
  return doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
}

function extractRobots(doc: Document): string {
  return doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
}

function calculateKeywordDensity(text: string, keywords: string[]): Record<string, number> {
  const density: Record<string, number> = {};
  const words = text.toLowerCase().split(/\s+/);
  const totalWords = words.length;

  keywords.forEach(keyword => {
    const keywordCount = words.filter(w => w === keyword.toLowerCase()).length;
    density[keyword] = (keywordCount / totalWords) * 100;
  });

  return density;
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}