import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '../types/seo';
import { calculateSEOScore } from './score';

export function exportSEOReport(results: SEOAnalysisResult, url: string): void {
  const doc = new jsPDF();
  const score = calculateSEOScore(results);

  // Add title
  doc.setFontSize(20);
  doc.text('SEO Analysis Report', 20, 20);

  // Add URL and date
  doc.setFontSize(12);
  doc.text(`URL: ${url}`, 20, 35);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 45);

  // Add overall score
  doc.setFontSize(16);
  doc.text(`Overall SEO Score: ${score}%`, 20, 60);

  // Add sections
  let yPosition = 80;

  // Meta Information
  doc.setFontSize(14);
  doc.text('Meta Information', 20, yPosition);
  yPosition += 10;
  doc.setFontSize(10);
  doc.text(`Title: ${results.title.content}`, 25, yPosition);
  yPosition += 10;
  doc.text(`Description: ${results.description.content}`, 25, yPosition);

  // Save the PDF
  doc.save(`seo-report-${new Date().toISOString().split('T')[0]}.pdf`);
}