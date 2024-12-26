"use client";

interface KeywordValidation {
  isValid: boolean;
  issues: string[];
  warnings: string[];
}

interface KeywordData {
  word: string;
  density: number;
}

export function validateKeywordUsage(keywords: KeywordData[]): KeywordValidation {
  const issues: string[] = [];
  const warnings: string[] = [];
  
  keywords.forEach(({ word, density }) => {
    // Check for keyword stuffing
    if (density > 3) {
      issues.push(`Keyword "${word}" appears too frequently (${density.toFixed(2)}%). Consider reducing usage.`);
    }
    
    // Check for low keyword density
    if (density < 0.5) {
      warnings.push(`Keyword "${word}" has low density (${density.toFixed(2)}%). Consider increasing if important.`);
    }
  });
  
  return {
    isValid: issues.length === 0,
    issues,
    warnings,
  };
}