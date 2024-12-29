export interface SEOTechnicalAnalysis {
  mobile: {
    isMobileResponsive: boolean;
    viewport: boolean;
    textReadability: boolean;
  };
  performance: {
    loadTime: number;
    size: number;
    requests: number;
  };
  security: {
    https: boolean;
    hsts: boolean;
    mixedContent: boolean;
  };
}