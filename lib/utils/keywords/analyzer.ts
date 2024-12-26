"use client";

import { KeywordAnalysis } from '@/lib/types/seo/keyword';
import { extractKeywords } from './extractor';
import { calculateDensity } from './density';
import { analyzeTopWords } from './top-words';
import { validateKeywordUsage } from './validator';

export function analyzeKeywords(text: string): KeywordAnalysis {
  // Extract and clean keywords
  const keywords = extractKeywords(text);
  
  // Calculate keyword density
  const density = calculateDensity(keywords);
  
  // Get top keywords
  const topKeywords = analyzeTopWords(keywords, density);
  
  // Validate keyword usage
  const validation = validateKeywordUsage(topKeywords);

  return {
    totalWords: keywords.length,
    uniqueWords: new Set(keywords).size,
    topKeywords,
    keywordDensity: density,
    validation,
  };
}