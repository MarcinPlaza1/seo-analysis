"use client";

import type { SEOAnalysisResult } from '@/lib/types/seo';
import { formatDate } from '../date';

export function generateHTMLReport(results: SEOAnalysisResult, url: string): string {
  const score = calculateScore(results);
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>SEO Analysis Report - ${url}</title>
        <style>
          body { font-family: system-ui, sans-serif; line-height: 1.5; max-width: 800px; margin: 0 auto; padding: 2rem; }
          .header { text-align: center; margin-bottom: 2rem; }
          .score { font-size: 3rem; font-weight: bold; color: ${getScoreColor(score)}; }
          .section { margin: 2rem 0; }
          .metric { display: flex; justify-content: space-between; margin: 0.5rem 0; }
          .issues { background: #fff8f8; padding: 1rem; border-radius: 0.5rem; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>SEO Analysis Report</h1>
          <p>URL: ${url}</p>
          <p>Generated: ${formatDate(new Date())}</p>
          <div class="score">${score}</div>
        </div>
        ${generateMetaSection(results)}
        ${generatePerformanceSection(results)}
        ${generateIssuesSection(results)}
      </body>
    </html>
  `;
}

function calculateScore(results: SEOAnalysisResult): number {
  let score = 100;
  
  if (!results.title.isOptimal) score -= 20;
  if (!results.description.isOptimal) score -= 20;
  if (results.headings.h1Count !== 1) score -= 15;
  if (results.images.withoutAlt > 0) score -= 15;
  if (!results.mobile.isMobileResponsive) score -= 30;
  
  return Math.max(0, score);
}

function getScoreColor(score: number): string {
  if (score >= 90) return '#22c55e';
  if (score >= 70) return '#eab308';
  return '#ef4444';
}

function generateMetaSection(results: SEOAnalysisResult): string {
  return `
    <div class="section">
      <h2>Meta Information</h2>
      <div class="metric">
        <span>Title (${results.title.length} chars)</span>
        <span>${results.title.isOptimal ? '✓' : '⚠'}</span>
      </div>
      <div class="metric">
        <span>Description (${results.description.length} chars)</span>
        <span>${results.description.isOptimal ? '✓' : '⚠'}</span>
      </div>
    </div>
  `;
}

function generatePerformanceSection(results: SEOAnalysisResult): string {
  return `
    <div class="section">
      <h2>Performance</h2>
      <div class="metric">
        <span>Load Time</span>
        <span>${results.performance.loadTime}ms</span>
      </div>
      <div class="metric">
        <span>Page Size</span>
        <span>${formatBytes(results.performance.size)}</span>
      </div>
    </div>
  `;
}

function generateIssuesSection(results: SEOAnalysisResult): string {
  const issues = [];
  
  if (!results.title.isOptimal) {
    issues.push(`Title length (${results.title.length}) is not optimal (50-60 chars)`);
  }
  if (!results.description.isOptimal) {
    issues.push(`Description length (${results.description.length}) is not optimal (150-160 chars)`);
  }
  if (results.headings.h1Count !== 1) {
    issues.push(`Page has ${results.headings.h1Count} H1 headings (should have exactly one)`);
  }
  if (results.images.withoutAlt > 0) {
    issues.push(`${results.images.withoutAlt} images missing alt text`);
  }
  
  return issues.length ? `
    <div class="section">
      <h2>Issues Found</h2>
      <div class="issues">
        <ul>
          ${issues.map(issue => `<li>${issue}</li>`).join('')}
        </ul>
      </div>
    </div>
  ` : '';
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}