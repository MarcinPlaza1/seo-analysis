import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '@/lib/types/seo';

export function generateMetaSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  let yPosition = startY;

  // Section Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Meta Information', 20, yPosition);
  yPosition += 10;

  // Content
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  // Title
  doc.text('Title:', 25, yPosition);
  const titleLines = doc.splitTextToSize(results.title.content, 160);
  doc.text(titleLines, 45, yPosition);
  yPosition += (titleLines.length * 5) + 5;

  // Description
  doc.text('Description:', 25, yPosition);
  const descLines = doc.splitTextToSize(results.description.content, 160);
  doc.text(descLines, 45, yPosition);
  yPosition += (descLines.length * 5) + 10;

  return yPosition;
}