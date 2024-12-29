"use client";

import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
import type { SEORecommendation } from "@/lib/types/seo/strategy";

interface RecommendationMetricsProps {
  metrics: SEORecommendation["metrics"];
}

export function RecommendationMetrics({ metrics }: RecommendationMetricsProps) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
        <Target className="h-4 w-4" />
        Key Metrics
      </h4>
      <div className="grid gap-2">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{metric.name}</span>
              <Badge variant={metric.importance === "high" ? "default" : "secondary"}>
                {metric.importance}
              </Badge>
            </div>
            <Badge variant="outline">{metric.target}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}