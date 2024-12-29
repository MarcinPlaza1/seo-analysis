"use client";

import { jsPDF } from 'jspdf';
import type { SEOAnalysisResult } from '@/lib/types/seo';
import { defaultTemplate } from './templates/default-template';
import { formatDate } from '../date';

interface ReportOptions {
  template?: typeof defaultTemplate;
  branding?: {
    logo?: string;
    primaryColor?: string;
    secondaryColor?: string;
    fontFamily?: string;
  };
  sections?: string[];
}

export async function generateSEOReport(
  results: SEOAnalysisResult,
  url: string,
  options: ReportOptions = {}
): Promise<jsPDF> {
  const template = options.template || defaultTemplate;
  const doc = new jsPDF();
  let yPosition = 20;

  // Apply branding
  const branding = {
    ...template.branding,
    ...options.branding,
  };

  // Configure styling
  doc.setFont(branding.fontFamily || 'helvetica');
  doc.setTextColor(branding.primaryColor || '#000000');

  // Add header
  yPosition = await addHeader(doc, url, branding, yPosition);

  // Add sections based on template configuration
  const enabledSections = template.sections
    .filter(section => section.enabled && (!options.sections || options.sections.includes(section.id)))
    .sort((a, b) => a.order - b.order);

  for (const section of enabledSections) {
    yPosition = await addSection(doc, section, results, yPosition);
    
    // Add page break if needed
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
  }

  // Add footer
  addFooter(doc);

  return doc;
}

async function addHeader(
  doc: jsPDF,
  url: string,
  branding: any,
  startY: number
): Promise<number> {
  let yPosition = startY;

  // Add logo if provided
  if (branding.logo) {
    try {
      const img = await loadImage(branding.logo);
      doc.addImage(img, 'PNG', 20, yPosition, 40, 20);
      yPosition += 25;
    } catch (error) {
      console.error('Failed to load logo:', error);
    }
  }

  // Add title
  doc.setFontSize(24);
  doc.text('SEO Analysis Report', 20, yPosition);
  yPosition += 10;

  // Add metadata
  doc.setFontSize(12);
  doc.setTextColor(branding.secondaryColor || '#666666');
  doc.text(`URL: ${url}`, 20, yPosition);
  yPosition += 7;
  doc.text(`Generated: ${formatDate(new Date())}`, 20, yPosition);
  yPosition += 15;

  return yPosition;
}

async function addSection(
  doc: jsPDF,
  section: any,
  results: SEOAnalysisResult,
  startY: number
): Promise<number> {
  let yPosition = startY;

  // Add section title
  doc.setFontSize(16);
  doc.text(section.title, 20, yPosition);
  yPosition += 10;

  // Add section content based on type
  switch (section.id) {
    case 'overview':
      yPosition = addOverviewSection(doc, results, yPosition);
      break;
    case 'technical':
      yPosition = addTechnicalSection(doc, results, yPosition);
      break;
    case 'content':
      yPosition = addContentSection(doc, results, yPosition);
      break;
    case 'keywords':
      yPosition = addKeywordSection(doc, results, yPosition);
      break;
    case 'recommendations':
      yPosition = addRecommendationsSection(doc, results, yPosition);
      break;
  }

  yPosition += 10;
  return yPosition;
}

function addFooter(doc: jsPDF): void {
  const pageCount = doc.getNumberOfPages();
  
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor('#666666');
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 10,
      { align: 'center' }
    );
  }
}

// Helper function to load images
function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

// Section content generators
function addOverviewSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  // Implementation for overview section
  return startY;
}

function addTechnicalSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  // Implementation for technical section
  return startY;
}

function addContentSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  // Implementation for content section
  return startY;
}

function addKeywordSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  // Implementation for keyword section
  return startY;
}

function addRecommendationsSection(doc: jsPDF, results: SEOAnalysisResult, startY: number): number {
  // Implementation for recommendations section
  return startY;
}