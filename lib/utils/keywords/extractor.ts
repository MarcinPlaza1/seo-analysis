"use client";

export function extractKeywords(text: string): string[] {
  return text.toLowerCase()
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove special characters
    .replace(/[^\w\s-]/g, '')
    // Split into words
    .split(/\s+/)
    // Filter out short words and numbers
    .filter(word => 
      word.length > 3 && 
      !word.match(/^\d+$/) &&
      !isStopWord(word)
    );
}

const stopWords = new Set([
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have',
  'this', 'from', 'with', 'by', 'for', 'not', 'word', 'but',
  'what', 'some', 'can', 'other', 'were', 'all', 'there',
  'when', 'your', 'how', 'each', 'she', 'which', 'their', 'time',
  'will', 'way', 'about', 'many', 'then', 'them', 'would', 'like'
]);

function isStopWord(word: string): boolean {
  return stopWords.has(word.toLowerCase());
}