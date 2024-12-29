export interface SecurityMetrics {
  https: boolean;
  hsts: boolean;
  mixedContent: boolean;
}

export function calculateSecurityScore(metrics: SecurityMetrics): number {
  let score = 0;
  if (metrics.https) score += 40;
  if (metrics.hsts) score += 30;
  if (!metrics.mixedContent) score += 30;
  return score;
}

export function getSecurityRecommendations(metrics: SecurityMetrics): string[] {
  const recommendations: string[] = [];
  if (!metrics.https) recommendations.push('Enable HTTPS for secure data transmission');
  if (!metrics.hsts) recommendations.push('Implement HSTS for enhanced security');
  if (metrics.mixedContent) recommendations.push('Fix mixed content issues');
  return recommendations;
}