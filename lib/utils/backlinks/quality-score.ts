"use client";

interface BacklinkQualityMetrics {
  authority: number;
  trustFlow: number;
  citationFlow: number;
  relevance: number;
  trafficValue: number;
  isDoFollow: boolean;
  anchorTextRelevance: number;
  domainAge: number;
  topicalRelevance: number;
}

interface QualityScore {
  score: number;
  breakdown: {
    authority: number;
    trust: number;
    relevance: number;
    technical: number;
  };
  category: 'excellent' | 'good' | 'average' | 'poor';
  recommendations: string[];
}

export function calculateBacklinkQuality(metrics: BacklinkQualityMetrics): QualityScore {
  // Calculate component scores
  const authorityScore = calculateAuthorityScore(metrics);
  const trustScore = calculateTrustScore(metrics);
  const relevanceScore = calculateRelevanceScore(metrics);
  const technicalScore = calculateTechnicalScore(metrics);

  // Calculate overall score (weighted average)
  const overallScore = (
    authorityScore * 0.35 +
    trustScore * 0.25 +
    relevanceScore * 0.25 +
    technicalScore * 0.15
  );

  return {
    score: Math.round(overallScore),
    breakdown: {
      authority: authorityScore,
      trust: trustScore,
      relevance: relevanceScore,
      technical: technicalScore,
    },
    category: getScoreCategory(overallScore),
    recommendations: generateRecommendations(metrics, {
      authority: authorityScore,
      trust: trustScore,
      relevance: relevanceScore,
      technical: technicalScore,
    }),
  };
}

function calculateAuthorityScore(metrics: BacklinkQualityMetrics): number {
  const authorityWeight = 0.7;
  const trafficWeight = 0.3;

  const authorityScore = (metrics.authority / 100) * 100;
  const trafficScore = (metrics.trafficValue / 1000) * 100;

  return (authorityScore * authorityWeight + trafficScore * trafficWeight);
}

function calculateTrustScore(metrics: BacklinkQualityMetrics): number {
  const trustFlowWeight = 0.5;
  const citationFlowWeight = 0.3;
  const domainAgeWeight = 0.2;

  const trustFlowScore = (metrics.trustFlow / 100) * 100;
  const citationFlowScore = (metrics.citationFlow / 100) * 100;
  const domainAgeScore = Math.min((metrics.domainAge / 10) * 100, 100);

  return (
    trustFlowScore * trustFlowWeight +
    citationFlowScore * citationFlowWeight +
    domainAgeScore * domainAgeWeight
  );
}

function calculateRelevanceScore(metrics: BacklinkQualityMetrics): number {
  const topicalWeight = 0.6;
  const anchorWeight = 0.4;

  const topicalScore = metrics.topicalRelevance * 100;
  const anchorScore = metrics.anchorTextRelevance * 100;

  return (topicalScore * topicalWeight + anchorScore * anchorWeight);
}

function calculateTechnicalScore(metrics: BacklinkQualityMetrics): number {
  let score = 100;

  if (!metrics.isDoFollow) score *= 0.7;
  
  return score;
}

function getScoreCategory(score: number): 'excellent' | 'good' | 'average' | 'poor' {
  if (score >= 80) return 'excellent';
  if (score >= 60) return 'good';
  if (score >= 40) return 'average';
  return 'poor';
}

function generateRecommendations(
  metrics: BacklinkQualityMetrics,
  scores: Record<string, number>
): string[] {
  const recommendations: string[] = [];

  if (scores.authority < 60) {
    recommendations.push('Focus on acquiring backlinks from higher authority domains');
  }

  if (scores.trust < 60) {
    recommendations.push('Improve trust metrics by getting links from well-established domains');
  }

  if (scores.relevance < 60) {
    recommendations.push('Target more topically relevant websites for backlinks');
  }

  if (!metrics.isDoFollow) {
    recommendations.push('Try to acquire more dofollow backlinks');
  }

  if (metrics.anchorTextRelevance < 0.5) {
    recommendations.push('Optimize anchor text distribution for better relevance');
  }

  return recommendations;
}