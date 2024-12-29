"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QualityScoreCard } from './quality-score-card';
import { calculateBacklinkQuality } from '@/lib/utils/backlinks/quality-score';

interface QualityAnalysisProps {
  backlink: {
    url: string;
    metrics: {
      authority: number;
      trustFlow: number;
      citationFlow: number;
      relevance: number;
      trafficValue: number;
      isDoFollow: boolean;
      anchorTextRelevance: number;
      domainAge: number;
      topicalRelevance: number;
    };
  };
}

export function QualityAnalysis({ backlink }: QualityAnalysisProps) {
  const [qualityScore, setQualityScore] = useState<any>(null);

  useEffect(() => {
    const score = calculateBacklinkQuality(backlink.metrics);
    setQualityScore(score);
  }, [backlink]);

  if (!qualityScore) return null;

  return (
    <div className="space-y-6">
      <QualityScoreCard
        score={qualityScore.score}
        breakdown={qualityScore.breakdown}
        category={qualityScore.category}
        recommendations={qualityScore.recommendations}
      />
    </div>
  );
}