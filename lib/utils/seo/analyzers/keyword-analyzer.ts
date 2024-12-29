"use client";

import { KeywordAnalysis } from '@/lib/types/seo/keyword';

export function analyzeKeywords(text: string): KeywordAnalysis {
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const wordCount = new Map<string, number>();
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });

  const topKeywords = Array.from(wordCount.entries())
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word, count]) => ({
      word,
      count,
      density: (count / words.length) * 100,
    }));

  return {
    totalWords: words.length,
    uniqueWords: wordCount.size,
    topKeywords,
    keywordDensity: Object.fromEntries(wordCount),
    validation: validateKeywordUsage(topKeywords),
  };
}

function validateKeywordUsage(keywords: Array<{ word: string; density: number }>) {
  const issues: string[] = [];
  const warnings: string[] = [];

  keywords.forEach(({ word, density }) => {
    if (density > 3) {
      issues.push(`Keyword "${word}" appears too frequently (${density.toFixed(2)}%). Consider reducing usage.`);
    } else if (density < 0.5) {
      warnings.push(`Keyword "${word}" has low density (${density.toFixed(2)}%). Consider increasing usage if important.`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
    warnings,
  };
}