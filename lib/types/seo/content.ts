export interface SEOContentAnalysis {
  headings: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    h4Count: number;
    h5Count: number;
    h6Count: number;
    structure: string[];
  };
  keywords: {
    density: Record<string, number>;
    topKeywords: Array<{
      word: string;
      count: number;
      density: number;
    }>;
  };
  readability: {
    sentenceCount: number;
    wordCount: number;
    averageWordsPerSentence: number;
  };
}