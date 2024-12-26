"use client";

interface KeywordData {
  word: string;
  count: number;
  density: number;
}

export function analyzeTopWords(
  words: string[], 
  density: Record<string, number>
): KeywordData[] {
  const wordCount = new Map<string, number>();
  
  // Count occurrences
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });
  
  // Convert to array and sort by count
  return Array.from(wordCount.entries())
    .map(([word, count]) => ({
      word,
      count,
      density: density[word] || 0,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10); // Get top 10 keywords
}