"use client";

import { HeadingAnalysis } from '@/lib/types/seo/heading';

export function analyzeHeadings(doc: Document): HeadingAnalysis {
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const structure = headings.map(h => ({
    level: parseInt(h.tagName[1]),
    text: h.textContent || '',
    hasKeywords: false, // Will be updated when analyzing with keywords
  }));

  const counts = {
    h1: structure.filter(h => h.level === 1).length,
    h2: structure.filter(h => h.level === 2).length,
    h3: structure.filter(h => h.level === 3).length,
    h4: structure.filter(h => h.level === 4).length,
    h5: structure.filter(h => h.level === 5).length,
    h6: structure.filter(h => h.level === 6).length,
  };

  const validation = validateHeadingStructure(structure);

  return {
    structure,
    counts,
    validation,
    outline: generateHeadingOutline(structure),
  };
}

function validateHeadingStructure(headings: Array<{ level: number; text: string }>): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check for single H1
  const h1Count = headings.filter(h => h.level === 1).length;
  if (h1Count === 0) {
    issues.push('Missing H1 heading');
  } else if (h1Count > 1) {
    issues.push('Multiple H1 headings found');
  }

  // Check for proper hierarchy
  headings.forEach((heading, index) => {
    if (index > 0) {
      const prev = headings[index - 1];
      if (heading.level > prev.level + 1) {
        issues.push(`Skipped heading level: H${prev.level} to H${heading.level}`);
      }
    }
  });

  // Check for empty headings
  headings.forEach(heading => {
    if (!heading.text.trim()) {
      issues.push(`Empty H${heading.level} heading found`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
  };
}

function generateHeadingOutline(headings: Array<{ level: number; text: string }>): string {
  let outline = '';
  let currentLevel = 0;

  headings.forEach(heading => {
    const indent = '  '.repeat(heading.level - 1);
    outline += `${indent}${heading.text}\n`;
  });

  return outline;
}