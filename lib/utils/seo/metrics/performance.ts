export interface PerformanceMetrics {
  loadTime: number;
  size: number;
  ttfb: number;
  resources: ResourceMetrics;
  webVitals: WebVitalMetrics;
}

interface ResourceMetrics {
  total: number;
  images: number;
  scripts: number;
  styles: number;
}

interface WebVitalMetrics {
  fcp: number;
  lcp: number;
  cls: number;
  fid: number;
}

export function calculatePerformanceScore(metrics: PerformanceMetrics): number {
  const scores = {
    loadTime: getLoadTimeScore(metrics.loadTime),
    ttfb: getTTFBScore(metrics.ttfb),
    webVitals: getWebVitalsScore(metrics.webVitals),
  };

  return (scores.loadTime + scores.ttfb + scores.webVitals) / 3;
}

function getLoadTimeScore(loadTime: number): number {
  if (loadTime <= 2000) return 100;
  if (loadTime <= 3000) return 75;
  if (loadTime <= 4000) return 50;
  return 25;
}

function getTTFBScore(ttfb: number): number {
  if (ttfb <= 200) return 100;
  if (ttfb <= 500) return 75;
  if (ttfb <= 1000) return 50;
  return 25;
}

function getWebVitalsScore(metrics: WebVitalMetrics): number {
  const scores = {
    fcp: metrics.fcp <= 1800 ? 100 : metrics.fcp <= 3000 ? 50 : 0,
    lcp: metrics.lcp <= 2500 ? 100 : metrics.lcp <= 4000 ? 50 : 0,
    cls: metrics.cls <= 0.1 ? 100 : metrics.cls <= 0.25 ? 50 : 0,
    fid: metrics.fid <= 100 ? 100 : metrics.fid <= 300 ? 50 : 0,
  };

  return Object.values(scores).reduce((a, b) => a + b, 0) / 4;
}