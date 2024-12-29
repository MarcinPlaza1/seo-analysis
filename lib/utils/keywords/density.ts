"use client";

export function calculateDensity(words: string[]): Record<string, number> {
  const totalWords = words.length;
  const wordCount = new Map<string, number>();
  
  // Count word occurrences
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });
  
  // Calculate density percentages
  const density: Record<string, number> = {};
  wordCount.forEach((count, word) => {
    density[word] = (count / totalWords) * 100;
  });
  
  return density;
}