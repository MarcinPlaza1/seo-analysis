import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '@/lib/types/seo';
import { formatDate } from '../date';
import { calculateSEOScore } from '../score';
import { generateMetaSection } from './sections/meta-section';
import { generatePerformanceSection } from './sections/performance-section';
import { generateRecommendationsSection } from './sections/recommendations-section';

export function generatePDFReport(doc: jsPDF, results: SEOAnalysisResult, url: string): void {
  const score = calculateSEOScore(results);
  let yPosition = 20;

  // Header
  yPosition = addHeader(doc, url, score, yPosition);

  // Sections
  yPosition = generateMetaSection(doc, results, yPosition);
  yPosition = generatePerformanceSection(doc, results, yPosition);
  yPosition = generateRecommendationsSection(doc, results, yPosition);
}

function addHeader(doc: jsPDF, url: string, score: number, startY: number): number {
  let yPosition = startY;

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('SEO Analysis Report', 20, yPosition);
  yPosition += 15;

  // URL and Date
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`URL: ${url}`, 20, yPosition);
  yPosition += 10;
  doc.text(`Date: ${formatDate(new Date())}`, 20, yPosition);
  yPosition += 10;

  // Score
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Overall SEO Score: ${score}%`, 20, yPosition);
  yPosition += 20;

  return yPosition;
}