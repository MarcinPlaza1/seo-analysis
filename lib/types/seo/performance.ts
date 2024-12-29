export interface PerformanceMetrics {
  loadTime: number;
  size: number;
  ttfb: number;
  resources: {
    total: number;
    images: number;
    scripts: number;
    styles: number;
  };
  metrics: {
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    cls: number; // Cumulative Layout Shift
    fid: number; // First Input Delay
  };
}