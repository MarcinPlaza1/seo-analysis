import { PerformanceMetrics } from '@/lib/types/seo/performance';

export async function analyzePerformance(url: string): Promise<PerformanceMetrics> {
  try {
    const start = performance.now();
    const response = await fetch(url);
    const end = performance.now();

    const size = parseInt(response.headers.get('content-length') || '0');
    const loadTime = end - start;

    return {
      loadTime,
      size,
      ttfb: response.timing?.requestStart || 0,
      resources: {
        total: 0,
        images: 0,
        scripts: 0,
        styles: 0,
      },
      metrics: {
        fcp: 0,
        lcp: 0,
        cls: 0,
        fid: 0,
      },
    };
  } catch (error) {
    console.error('Performance analysis failed:', error);
    return {
      loadTime: 0,
      size: 0,
      ttfb: 0,
      resources: {
        total: 0,
        images: 0,
        scripts: 0,
        styles: 0,
      },
      metrics: {
        fcp: 0,
        lcp: 0,
        cls: 0,
        fid: 0,
      },
    };
  }
}