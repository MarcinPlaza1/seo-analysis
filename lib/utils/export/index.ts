import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '@/lib/types/seo';
import { generatePDFReport } from './pdf-generator';

export function exportSEOReport(results: SEOAnalysisResult, url: string): void {
  const doc = new jsPDF();
  generatePDFReport(doc, results, url);
  doc.save(`seo-report-${new Date().toISOString().split('T')[0]}.pdf`);
}