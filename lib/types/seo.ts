export interface SEOAnalysisResult {
  title: {
    content: string;
    length: number;
    isOptimal: boolean;
  };
  description: {
    content: string;
    length: number;
    isOptimal: boolean;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    h4Count: number;
    h5Count: number;
    h6Count: number;
    structure: string[];
  };
  images: {
    total: number;
    withAlt: number;
    withoutAlt: number;
    altTexts: string[];
  };
  links: {
    internal: number;
    external: number;
    broken: number;
    list: Array<{
      url: string;
      type: 'internal' | 'external';
      text: string;
    }>;
  };
  keywords: {
    density: Record<string, number>;
    topKeywords: Array<{
      word: string;
      count: number;
      density: number;
    }>;
  };
  performance: {
    loadTime: number;
    size: number;
    requests: number;
  };
  mobile: {
    isMobileResponsive: boolean;
    viewport: boolean;
    textReadability: boolean;
  };
}

export interface CompetitorAnalysis {
  url: string;
  score: number;
  metrics: Partial<SEOAnalysisResult>;
}

export interface SocialPreview {
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}