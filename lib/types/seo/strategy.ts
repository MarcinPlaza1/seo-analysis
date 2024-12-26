export interface SEORecommendation {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  implementation: string[];
  metrics: Array<{
    name: string;
    target: string;
    importance: string;
  }>;
  tools: string[];
}

export interface SEOStrategySection {
  title: string;
  description: string;
  icon: string;
  recommendations: SEORecommendation[];
}

export interface SEOStrategy {
  onPageSEO: SEOStrategySection;
  technicalSEO: SEOStrategySection;
  contentStrategy: SEOStrategySection;
  linkBuilding: SEOStrategySection;
}