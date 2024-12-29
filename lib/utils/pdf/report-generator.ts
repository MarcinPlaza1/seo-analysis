"use client";

import { Font } from '@react-pdf/renderer';
import type { SEOAnalysisResult } from '@/lib/types/seo';
import { formatDate } from '@/lib/utils/date';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7.woff2', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7.woff2', fontWeight: 700 },
  ],
});

export interface ReportData {
  url: string;
  date: Date;
  results: SEOAnalysisResult;
  score: number;
}

export function generateReportStyles() {
  return {
    page: {
      fontFamily: 'Inter',
      padding: 40,
      fontSize: 12,
    },
    header: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 10,
      color: '#333',
    },
    scoreCircle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#f4f4f4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    scoreText: {
      fontSize: 24,
      fontWeight: 700,
      color: '#333',
    },
    table: {
      width: '100%',
      marginBottom: 10,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      borderBottomStyle: 'solid',
      paddingVertical: 8,
    },
    tableHeader: {
      backgroundColor: '#f9f9f9',
      fontWeight: 600,
    },
    tableCell: {
      flex: 1,
      padding: 8,
    },
    list: {
      marginLeft: 20,
      marginBottom: 10,
    },
    listItem: {
      marginBottom: 5,
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 40,
      right: 40,
      textAlign: 'center',
      color: '#666',
      fontSize: 10,
    },
  };
}

export function formatReportData(data: ReportData) {
  return {
    metadata: {
      url: data.url,
      date: formatDate(data.date),
      score: data.score,
    },
    sections: [
      {
        title: 'Meta Information',
        data: [
          { label: 'Title', value: data.results.title.content },
          { label: 'Description', value: data.results.description.content },
        ],
      },
      {
        title: 'Content Analysis',
        data: [
          { label: 'Word Count', value: data.results.content.readability.wordCount },
          { label: 'Average Words per Sentence', value: data.results.content.readability.averageWordsPerSentence.toFixed(1) },
        ],
      },
      {
        title: 'Technical Analysis',
        data: [
          { label: 'Load Time', value: `${data.results.performance.loadTime.toFixed(2)}s` },
          { label: 'Mobile Friendly', value: data.results.mobile.isMobileResponsive ? 'Yes' : 'No' },
          { label: 'HTTPS', value: data.results.technical.security.https ? 'Yes' : 'No' },
        ],
      },
    ],
    recommendations: generateRecommendations(data.results),
  };
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