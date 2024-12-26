"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface PerformanceComparisonProps {
  yourPerformance: SEOAnalysisResult['performance'];
  competitorPerformance: SEOAnalysisResult['performance'];
}

export function PerformanceComparison({ yourPerformance, competitorPerformance }: PerformanceComparisonProps) {
  const metrics = [
    {
      name: "Load Time",
      yours: yourPerformance.loadTime,
      competitor: competitorPerformance.loadTime,
      format: (value: number) => `${value.toFixed(2)}s`,
      better: "lower",
    },
    {
      name: "Page Size",
      yours: yourPerformance.size,
      competitor: competitorPerformance.size,
      format: (value: number) => formatSize(value),
      better: "lower",
    },
    {
      name: "Requests",
      yours: yourPerformance.requests,
      competitor: competitorPerformance.requests,
      format: (value: number) => value.toString(),
      better: "lower",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{metric.name}</span>
                <div className="flex gap-4">
                  <span className="text-sm text-muted-foreground">
                    You: {metric.format(metric.yours)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Them: {metric.format(metric.competitor)}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Progress 
                  value={getProgressValue(metric.yours, metric)} 
                  className="h-2"
                />
                <Progress 
                  value={getProgressValue(metric.competitor, metric)} 
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

function getProgressValue(value: number, metric: { better: string }): number {
  const maxValues = {
    "Load Time": 10, // 10 seconds
    "Page Size": 5 * 1024 * 1024, // 5MB
    "Requests": 100,
  };

  const normalized = (value / (maxValues[metric.name as keyof typeof maxValues])) * 100;
  return metric.better === "lower" ? 100 - Math.min(normalized, 100) : Math.min(normalized, 100);
}