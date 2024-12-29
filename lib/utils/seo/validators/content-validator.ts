"use client";

import { ContentValidationResult } from '@/lib/types/seo/validation';
import { ContentConfig } from '@/lib/types/seo/config';

export function validateContent(content: ContentConfig): ContentValidationResult {
  const issues: string[] = [];
  const warnings: string[] = [];
  const readabilityIssues: string[] = [];
  const keywordIssues: string[] = [];
  const structureIssues: string[] = [];

  // Word count validation
  if (content.wordCount < content.minWordsPerPage) {
    readabilityIssues.push(`Content is too short (minimum: ${content.minWordsPerPage} words)`);
  }

  // Sentence length validation
  if (content.averageWordsPerSentence > content.maxWordsPerSentence) {
    readabilityIssues.push('Sentences are too long on average');
  }

  // Paragraph length validation
  if (content.paragraphs.some(p => p.wordCount > 150)) {
    warnings.push('Some paragraphs are too long (recommended: max 150 words)');
  }

  // Heading structure validation
  if (content.headings.h1Count !== 1) {
    structureIssues.push(`Page has ${content.headings.h1Count} H1 headings (should have exactly one)`);
  }
  if (content.headings.structure.some((h, i, arr) => {
    if (i === 0) return false;
    const curr = parseInt(h[1]);
    const prev = parseInt(arr[i-1][1]);
    return curr > prev + 1;
  })) {
    structureIssues.push('Heading hierarchy is not sequential');
  }

  // Keyword validation
  content.keywords.topKeywords.forEach(keyword => {
    if (keyword.density > content.keywordDensityRange.max) {
      keywordIssues.push(`Keyword "${keyword.word}" appears too frequently (${keyword.density.toFixed(2)}%)`);
    }
    if (keyword.density < content.keywordDensityRange.min && keyword.count > 2) {
      warnings.push(`Consider optimizing keyword "${keyword.word}" (current density: ${keyword.density.toFixed(2)}%)`);
    }
  });

  return {
    isValid: readabilityIssues.length === 0 && keywordIssues.length === 0 && structureIssues.length === 0,
    score: calculateContentScore(content, readabilityIssues, keywordIssues, structureIssues),
    issues: [...readabilityIssues, ...keywordIssues, ...structureIssues],
    warnings,
    readabilityIssues,
    keywordIssues,
    structureIssues,
  };
}

function calculateContentScore(
  content: ContentConfig,
  readabilityIssues: string[],
  keywordIssues: string[],
  structureIssues: string[]
): number {
  let score = 100;

  // Readability scoring (40 points)
  if (readabilityIssues.length > 0) {
    score -= 40 * (readabilityIssues.length / 3);
  }

  // Keyword optimization scoring (30 points)
  if (keywordIssues.length > 0) {
    score -= 30 * (keywordIssues.length / 3);
  }

  // Structure scoring (30 points)
  if (structureIssues.length > 0) {
    score -= 30 * (structureIssues.length / 2);
  }

  return Math.max(0, Math.min(100, score));
}