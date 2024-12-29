import { HistoricalAnalysis, HistoryStats } from '@/lib/types/seo/history';
import { SEOAnalysisResult } from '@/lib/types/seo';
import { calculateSEOScore } from './score';

export function createHistoricalEntry(
  url: string,
  results: SEOAnalysisResult
): HistoricalAnalysis {
  const score = calculateSEOScore(results);
  
  return {
    id: generateId(),
    url,
    date: new Date(),
    score,
    metrics: {
      performance: calculatePerformanceScore(results),
      seo: score,
      accessibility: calculateAccessibilityScore(results),
      bestPractices: calculateBestPracticesScore(results),
    },
    trends: {
      keywords: results.keywords.topKeywords.slice(0, 5),
      performance: {
        loadTime: results.performance.loadTime,
        size: results.performance.size,
      },
    },
  };
}

export function calculateHistoryStats(history: HistoricalAnalysis[]): HistoryStats {
  if (history.length === 0) {
    return {
      averageScore: 0,
      improvement: 0,
      totalAnalyses: 0,
      bestPerformingUrl: '',
    };
  }

  const scores = history.map(entry => entry.score);
  const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  
  // Calculate improvement (comparing last 2 entries)
  const improvement = history.length > 1
    ? history[0].score - history[1].score
    : 0;

  // Find best performing URL
  const bestEntry = history.reduce((best, current) => 
    current.score > best.score ? current : best
  );

  return {
    averageScore,
    improvement,
    totalAnalyses: history.length,
    bestPerformingUrl: bestEntry.url,
  };
}

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function calculatePerformanceScore(results: SEOAnalysisResult): number {
  const { performance } = results;
  let score = 100;

  if (performance.loadTime > 3000) score -= 20;
  if (performance.size > 5000000) score -= 20;
  if (performance.requests > 100) score -= 20;

  return Math.max(0, score);
}

function calculateAccessibilityScore(results: SEOAnalysisResult): number {
  let score = 100;

  if (results.images.withoutAlt > 0) {
    score -= (results.images.withoutAlt / results.images.total) * 50;
  }

  if (!results.mobile.textReadability) score -= 25;

  return Math.max(0, score);
}

function calculateBestPracticesScore(results: SEOAnalysisResult): number {
  let score = 100;

  if (!results.mobile.isMobileResponsive) score -= 30;
  if (!results.technical.security.https) score -= 30;
  if (results.technical.security.mixedContent) score -= 20;

  return Math.max(0, score);
}