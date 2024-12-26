"use client";

export interface ReadabilityScore {
  score: number;
  label: string;
  color: string;
  description: string;
}

export function calculateReadabilityScore(averageWordsPerSentence: number): number {
  if (averageWordsPerSentence >= 15 && averageWordsPerSentence <= 20) return 100;
  if (averageWordsPerSentence < 15) return (averageWordsPerSentence / 15) * 100;
  return Math.max(0, 100 - ((averageWordsPerSentence - 20) * 5));
}

export function getReadabilityLevel(score: number): ReadabilityScore {
  if (score >= 90) {
    return { 
      score,
      label: "Very Easy", 
      color: "text-green-500", 
      description: "Perfect for general audience" 
    };
  }
  if (score >= 70) {
    return { 
      score,
      label: "Easy", 
      color: "text-blue-500", 
      description: "Suitable for most readers" 
    };
  }
  if (score >= 50) {
    return { 
      score,
      label: "Moderate", 
      color: "text-yellow-500", 
      description: "May need simplification" 
    };
  }
  return { 
    score,
    label: "Difficult", 
    color: "text-red-500", 
    description: "Consider revising for clarity" 
  };
}

export function calculateFleschScore(averageWordsPerSentence: number): number {
  const score = 206.835 - (1.015 * averageWordsPerSentence);
  return Math.min(100, Math.max(0, score));
}