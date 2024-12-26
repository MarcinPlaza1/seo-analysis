"use client";

import type { SEOAnalysisResult } from '@/lib/types/seo';
import { formatDate } from '../../date';
import { getScoreColor } from '../utils';

export function generateBasicTemplate(results: SEOAnalysisResult, url: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Basic SEO Report - ${url}</title>
        ${getBaseStyles()}
      </head>
      <body>
        ${generateHeader(url)}
        ${generateScoreSection(results)}
        ${generateQuickSummary(results)}
      </body>
    </html>
  `;
}

function getBaseStyles(): string {
  return `
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        color: #1a1a1a;
      }
      .header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #eaeaea;
      }
      .score-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
      }
      .score {
        font-size: 4rem;
        font-weight: bold;
        text-align: center;
        padding: 1rem;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .summary {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
      }
      .metric {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid #eaeaea;
      }
      .metric:last-child {
        border-bottom: none;
      }
    </style>
  `;
}

function generateHeader(url: string): string {
  return `
    <div class="header">
      <h1>SEO Analysis Report</h1>
      <p>URL: ${url}</p>
      <p>Generated: ${formatDate(new Date())}</p>
    </div>
  `;
}

function generateScoreSection(results: SEOAnalysisResult): string {
  const score = calculateOverallScore(results);
  return `
    <div class="score-container">
      <div class="score" style="color: ${getScoreColor(score)}">
        ${score}
      </div>
    </div>
  `;
}

function generateQuickSummary(results: SEOAnalysisResult): string {
  return `
    <div class="summary">
      <h2>Quick Summary</h2>
      <div class="metric">
        <span>Meta Title</span>
        <span>${results.title.isOptimal ? '✓ Optimal' : '⚠ Needs Improvement'}</span>
      </div>
      <div class="metric">
        <span>Meta Description</span>
        <span>${results.description.isOptimal ? '✓ Optimal' : '⚠ Needs Improvement'}</span>
      </div>
      <div class="metric">
        <span>Mobile Friendly</span>
        <span>${results.mobile.isMobileResponsive ? '✓ Yes' : '⚠ No'}</span>
      </div>
      <div class="metric">
        <span>Load Time</span>
        <span>${results.performance.loadTime}ms</span>
      </div>
    </div>
  `;
}

function calculateOverallScore(results: SEOAnalysisResult): number {
  let score = 100;
  
  if (!results.title.isOptimal) score -= 20;
  if (!results.description.isOptimal) score -= 20;
  if (results.headings.h1Count !== 1) score -= 15;
  if (results.images.withoutAlt > 0) score -= 15;
  if (!results.mobile.isMobileResponsive) score -= 30;
  
  return Math.max(0, score);
}