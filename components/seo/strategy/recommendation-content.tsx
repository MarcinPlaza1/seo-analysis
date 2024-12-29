"use client";

import { ImplementationSteps } from "./implementation-steps";
import { RecommendationMetrics } from "./recommendation-metrics";
import { RecommendationTools } from "./recommendation-tools";
import type { SEORecommendation } from "@/lib/types/seo/strategy";

interface RecommendationContentProps {
  recommendation: SEORecommendation;
}

export function RecommendationContent({ recommendation }: RecommendationContentProps) {
  return (
    <div className="space-y-6 pt-4">
      <p className="text-sm text-muted-foreground">
        {recommendation.description}
      </p>
      
      <div className="space-y-6">
        <ImplementationSteps steps={recommendation.implementation} />
        <RecommendationMetrics metrics={recommendation.metrics} />
        <RecommendationTools tools={recommendation.tools} />
      </div>
    </div>
  );
}