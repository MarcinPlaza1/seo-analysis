export interface KeywordAnalysis {
  totalWords: number;
  uniqueWords: number;
  topKeywords: Array<{
    word: string;
    count: number;
    density: number;
  }>;
  keywordDensity: Record<string, number>;
  validation: {
    isValid: boolean;
    issues: string[];
    warnings: string[];
  };
}