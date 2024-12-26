"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import type { PerformanceMetrics } from "@/lib/utils/seo/metrics/performance";
import { calculatePerformanceScore } from "@/lib/utils/seo/metrics/performance";

interface PerformanceCardProps {
  metrics: PerformanceMetrics;
}

export function PerformanceCard({ metrics }: PerformanceCardProps) {
  const score = calculatePerformanceScore(metrics);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Performance</CardTitle>
          <Tooltip content="Core Web Vitals and performance metrics">
            <Info className="h-4 w-4 text-muted-foreground" />
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold">{Math.round(score)}</div>
            <p className="text-sm text-muted-foreground">Performance Score</p>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Load Time</span>
                <span className="text-sm">{metrics.loadTime}ms</span>
              </div>
              <Progress value={(metrics.loadTime / 4000) * 100} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">TTFB</span>
                <span className="text-sm">{metrics.ttfb}ms</span>
              </div>
              <Progress value={(metrics.ttfb / 1000) * 100} className="h-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Resources</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>{metrics.resources.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Images</span>
                  <span>{metrics.resources.images}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scripts</span>
                  <span>{metrics.resources.scripts}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Web Vitals</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>FCP</span>
                  <span>{metrics.webVitals.fcp}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>LCP</span>
                  <span>{metrics.webVitals.lcp}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>CLS</span>
                  <span>{metrics.webVitals.cls}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}