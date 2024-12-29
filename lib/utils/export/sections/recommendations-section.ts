import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '@/lib/types/seo';

export function generateRecommendationsSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  let yPosition = startY;

  // Section Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Recommendations', 20, yPosition);
  yPosition += 10;

  // Content
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const recommendations = generateRecommendations(results);
  recommendations.forEach(recommendation => {
    const lines = doc.splitTextToSize(`• ${recommendation}`, 170);
    doc.text(lines, 25, yPosition);
    yPosition += (lines.length * 5) + 5;
  });

  return yPosition;
}

function generateRecommendations(results: SEOAnalysisResult): string[] {
  const recommendations: string[] = [];

  if (!results.title.isOptimal) {
    recommendations.push(`Optimize title length (current: ${results.title.length} characters, optimal: 50-60)`);
  }

  if (!results.description.isOptimal) {
    recommendations.push(`Optimize meta description length (current: ${results.description.length} characters, optimal: 150-160)`);
  }

  if (results.headings.h1Count !== 1) {
    recommendations.push(`Use exactly one H1 heading (current: ${results.headings.h1Count})`);
  }

  if (results.images.withoutAlt > 0) {
    recommendations.push(`Add alt text to ${results.images.withoutAlt} images`);
  }

  if (!results.mobile.isMobileResponsive) {
    recommendations.push('Optimize website for mobile devices');
  }

  return recommendations;
}