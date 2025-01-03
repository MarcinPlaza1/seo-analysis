"use client";

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { ReportData } from './report-generator';
import { generateReportStyles, formatReportData } from './report-generator';

const styles = StyleSheet.create(generateReportStyles());

export function ReportTemplate({ data }: { data: ReportData }) {
  const report = formatReportData(data);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SEO Analysis Report</Text>
          <Text style={styles.subtitle}>
            {report.metadata.url}{'\n'}
            Generated on {report.metadata.date}
          </Text>
        </View>

        {/* Overall Score */}
        <View style={styles.section}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>{report.metadata.score}</Text>
          </View>
          <Text style={styles.sectionTitle}>Overall SEO Score</Text>
        </View>

        {/* Analysis Sections */}
        {report.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.table}>
              {section.data.map((item, i) => (
                <View key={i} style={[styles.tableRow, i === 0 && styles.tableHeader]}>
                  <Text style={styles.tableCell}>{item.label}</Text>
                  <Text style={styles.tableCell}>{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Recommendations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <View style={styles.list}>
            {report.recommendations.map((recommendation, index) => (
              <Text key={index} style={styles.listItem}>
                • {recommendation}
              </Text>
            ))}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Generated by SEO Master • {report.metadata.date}
        </Text>
      </Page>
    </Document>
  );
}