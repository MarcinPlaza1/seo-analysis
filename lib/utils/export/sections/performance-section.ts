import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '@/lib/types/seo';

export function generatePerformanceSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  let yPosition = startY;

  // Section Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Performance Metrics', 20, yPosition);
  yPosition += 10;

  // Content
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  const metrics = [
    { label: 'Load Time', value: `${results.performance.loadTime.toFixed(2)}ms` },
    { label: 'Page Size', value: formatBytes(results.performance.size) },
    { label: 'Total Requests', value: results.performance.requests.toString() },
  ];

  metrics.forEach(metric => {
    doc.text(`${metric.label}:`, 25, yPosition);
    doc.text(metric.value, 80, yPosition);
    yPosition += 7;
  });

  yPosition += 10;
  return yPosition;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}