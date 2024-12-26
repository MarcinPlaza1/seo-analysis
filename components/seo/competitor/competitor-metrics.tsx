"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface CompetitorMetricsProps {
  yourMetrics: SEOAnalysisResult;
  competitorMetrics: SEOAnalysisResult;
}

export function CompetitorMetrics({ yourMetrics, competitorMetrics }: CompetitorMetricsProps) {
  const metrics = [
    {
      name: "Content Length",
      yours: yourMetrics.content.readability.wordCount,
      competitor: competitorMetrics.content.readability.wordCount,
      format: (value: number) => `${value} words`,
    },
    {
      name: "Keyword Density",
      yours: yourMetrics.keywords.topKeywords[0]?.density || 0,
      competitor: competitorMetrics.keywords.topKeywords[0]?.density || 0,
      format: (value: number) => `${value.toFixed(2)}%`,
    },
    {
      name: "Internal Links",
      yours: yourMetrics.links.internal,
      competitor: competitorMetrics.links.internal,
      format: (value: number) => value.toString(),
    },
    {
      name: "External Links",
      yours: yourMetrics.links.external,
      competitor: competitorMetrics.links.external,
      format: (value: number) => value.toString(),
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{metric.name}</span>
                  <Tooltip content={getMetricDescription(metric.name)}>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </Tooltip>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Your Site</span>
                    <span className="text-sm">{metric.format(metric.yours)}</span>
                  </div>
                  <Progress value={getProgressValue(metric.yours, metric)} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Competitor</span>
                    <span className="text-sm">{metric.format(metric.competitor)}</span>
                  </div>
                  <Progress value={getProgressValue(metric.competitor, metric)} className="h-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getMetricDescription(metricName: string): string {
  const descriptions: Record<string, string> = {
    "Content Length": "Total number of words in the main content",
    "Keyword Density": "Percentage of primary keyword occurrence",
    "Internal Links": "Number of links pointing to other pages on the same domain",
    "External Links": "Number of links pointing to other domains",
  };
  return descriptions[metricName] || "";
}

function getProgressValue(value: number, metric: { name: string; yours: number; competitor: number }): number {
  switch (metric.name) {
    case "Content Length":
      return Math.min((value / 2000) * 100, 100);
    case "Keyword Density":
      return Math.min((value / 3) * 100, 100);
    case "Internal Links":
    case "External Links":
      return Math.min((value / 20) * 100, 100);
    default:
      return 0;
  }
}