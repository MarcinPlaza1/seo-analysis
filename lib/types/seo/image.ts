export interface ImageAnalysis {
  total: number;
  withAlt: number;
  withoutAlt: number;
  lazyLoaded: number;
  images: Array<{
    src: string;
    alt: string;
    hasAlt: boolean;
    hasLazyLoading: boolean;
    dimensions: {
      width: number;
      height: number;
    };
  }>;
  validation: {
    isValid: boolean;
    issues: string[];
    warnings: string[];
  };
}