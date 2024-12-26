export function calculateReadabilityMetrics(text: string) {
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const words = text.split(/\s+/).filter(Boolean);
  
  return {
    sentenceCount: sentences.length,
    wordCount: words.length,
    averageWordsPerSentence: words.length / sentences.length,
    readabilityScore: calculateReadabilityScore(words.length / sentences.length),
  };
}

function calculateReadabilityScore(averageWordsPerSentence: number): number {
  if (averageWordsPerSentence >= 15 && averageWordsPerSentence <= 20) return 100;
  if (averageWordsPerSentence < 15) return (averageWordsPerSentence / 15) * 100;
  return Math.max(0, 100 - ((averageWordsPerSentence - 20) * 5));
}