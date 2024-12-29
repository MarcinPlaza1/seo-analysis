"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info, AlertCircle } from "lucide-react";
import type { PerformanceMetrics } from "@/lib/types/seo/performance";

interface PerformanceMetricsProps {
  metrics: PerformanceMetrics;
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const formatTime = (ms: number) => {
    return `${ms.toFixed(2)}ms`;
  };

  const getMetricStatus = (metric: string, value: number) => {
    const thresholds = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fid: { good: 100, needsImprovement: 300 },
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return "default";

    if (value <= threshold.good) return "text-green-500";
    if (value <= threshold.needsImprovement) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Performance Metrics</CardTitle>
          <Tooltip content="Core Web Vitals and performance metrics">
            <Info className="h-4 w-4 text-muted-foreground" />
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Page Load Time</span>
                  <Tooltip content="Time taken to load the entire page">
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </Tooltip>
                </div>
                <span className={`text-sm ${getMetricStatus('fcp', metrics.loadTime)}`}>
                  {formatTime(metrics.loadTime)}
                </span>
              </div>
              <Progress 
                value={Math.min((metrics.loadTime / 3000) * 100, 100)} 
                className="h-2"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">TTFB</span>
                  <Tooltip content="Time to First Byte - Initial server response time">
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </Tooltip>
                </div>
                <span className={`text-sm ${getMetricStatus('fcp', metrics.ttfb)}`}>
                  {formatTime(metrics.ttfb)}
                </span>
              </div>
              <Progress 
                value={Math.min((metrics.ttfb / 600) * 100, 100)} 
                className="h-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Core Web Vitals</h4>
              <div className="space-y-3">
                {Object.entries(metrics.metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {key.toUpperCase()}
                      </span>
                      <Tooltip content={getMetricDescription(key)}>
                        <Info className="h-3 w-3 text-muted-foreground" />
                      </Tooltip>
                    </div>
                    <span className={`text-sm ${getMetricStatus(key, value)}`}>
                      {key === 'cls' ? value.toFixed(3) : formatTime(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3">Resource Breakdown</h4>
              <div className="space-y-3">
                {Object.entries(metrics.resources).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground capitalize">
                      {key}
                    </span>
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {shouldShowWarning(metrics) && (
            <div className="flex items-center gap-2 p-3 bg-yellow-500/10 text-yellow-500 rounded-lg text-sm">
              <AlertCircle className="h-4 w-4" />
              <p>Performance improvements recommended. Check Core Web Vitals.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function getMetricDescription(metric: string): string {
  const descriptions = {
    fcp: "First Contentful Paint - Time until the first content is rendered",
    lcp: "Largest Contentful Paint - Time until the largest content element is rendered",
    cls: "Cumulative Layout Shift - Measures visual stability",
    fid: "First Input Delay - Time until the page becomes interactive",
  };
  return descriptions[metric as keyof typeof descriptions] || "";
}

function shouldShowWarning(metrics: PerformanceMetrics): boolean {
  return (
    metrics.metrics.fcp > 3000 ||
    metrics.metrics.lcp > 4000 ||
    metrics.metrics.cls > 0.25 ||
    metrics.metrics.fid > 300
  );
}