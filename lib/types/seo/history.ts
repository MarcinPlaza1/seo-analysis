export interface HistoricalAnalysis {
  id: string;
  url: string;
  date: Date;
  score: number;
  metrics: {
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  };
  trends: {
    keywords: Array<{
      word: string;
      density: number;
    }>;
    performance: {
      loadTime: number;
      size: number;
    };
  };
}

export interface HistoryStats {
  averageScore: number;
  improvement: number;
  totalAnalyses: number;
  bestPerformingUrl: string;
}