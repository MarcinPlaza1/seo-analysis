"use client";

import type { SEOAnalysisResult } from '@/lib/types/seo';
import { formatDate } from '../../date';
import { getScoreColor, formatBytes } from '../utils';
import { generateCharts } from '../charts';

export function generateDetailedTemplate(results: SEOAnalysisResult, url: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Detailed SEO Report - ${url}</title>
        ${getDetailedStyles()}
      </head>
      <body>
        ${generateHeader(url)}
        ${generateDetailedScore(results)}
        ${generateMetricsSection(results)}
        ${generateCharts(results)}
        ${generateRecommendations(results)}
      </body>
    </html>
  `;
}

function getDetailedStyles(): string {
  return `
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        line-height: 1.5;
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
        color: #1a1a1a;
        background: #f8f9fa;
      }
      .header {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
      }
      .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }
      .metric-card {
        background: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .chart-container {
        background: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin: 2rem 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .recommendations {
        background: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .recommendation-item {
        padding: 1rem;
        border-left: 4px solid;
        margin: 1rem 0;
        background: #f8f9fa;
      }
      .priority-high { border-color: #ef4444; }
      .priority-medium { border-color: #f59e0b; }
      .priority-low { border-color: #10b981; }
    </style>
  `;
}

function generateDetailedScore(results: SEOAnalysisResult): string {
  const score = calculateDetailedScore(results);
  return `
    <div class="metric-card">
      <h2>Overall SEO Score</h2>
      <div style="font-size: 3rem; font-weight: bold; color: ${getScoreColor(score)}">
        ${score}/100
      </div>
      <p>${getScoreDescription(score)}</p>
    </div>
  `;
}

function generateMetricsSection(results: SEOAnalysisResult): string {
  return `
    <div class="metrics-grid">
      ${generateMetaMetrics(results)}
      ${generatePerformanceMetrics(results)}
      ${generateContentMetrics(results)}
      ${generateTechnicalMetrics(results)}
    </div>
  `;
}

function generateRecommendations(results: SEOAnalysisResult): string {
  const recommendations = getDetailedRecommendations(results);
  return `
    <div class="recommendations">
      <h2>Recommendations</h2>
      ${recommendations.map(rec => `
        <div class="recommendation-item priority-${rec.priority}">
          <h3>${rec.title}</h3>
          <p>${rec.description}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// Helper functions
function calculateDetailedScore(results: SEOAnalysisResult): number {
  // Implement detailed scoring logic
  return 0;
}

function getScoreDescription(score: number): string {
  if (score >= 90) return 'Excellent! Your site is well-optimized.';
  if (score >= 70) return 'Good, but there\'s room for improvement.';
  return 'Needs significant improvements.';
}

function getDetailedRecommendations(results: SEOAnalysisResult): Array<{
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}> {
  // Implement detailed recommendations logic
  return [];
}