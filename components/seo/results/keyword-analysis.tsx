"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info, TrendingUp, TrendingDown } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface KeywordAnalysisProps {
  keywords: SEOAnalysisResult['keywords'];
}

export function KeywordAnalysis({ keywords }: KeywordAnalysisProps) {
  const getKeywordStatus = (density: number) => {
    if (density < 0.5) return { color: "text-yellow-500", icon: <TrendingDown className="h-4 w-4" /> };
    if (density > 3) return { color: "text-red-500", icon: <TrendingUp className="h-4 w-4" /> };
    return { color: "text-green-500", icon: null };
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Keyword Analysis</CardTitle>
          <Tooltip content="Analysis of keyword frequency and density">
            <Info className="h-4 w-4 text-muted-foreground" />
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            {keywords.topKeywords.slice(0, 5).map((keyword, index) => {
              const status = getKeywordStatus(keyword.density);
              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{keyword.word}</span>
                      {status.icon}
                    </div>
                    <Tooltip content={getKeywordTooltip(keyword.density)}>
                      <span className={`text-sm ${status.color}`}>
                        {keyword.count} ({keyword.density.toFixed(2)}%)
                      </span>
                    </Tooltip>
                  </div>
                  <Progress 
                    value={Math.min(keyword.density * 20, 100)} 
                    className={`h-2 ${
                      keyword.density < 0.5 ? "bg-yellow-200" :
                      keyword.density > 3 ? "bg-red-200" :
                      ""
                    }`}
                  />
                </div>
              );
            })}
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-medium">Keyword Density Guidelines:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Optimal density: 0.5% - 3%</li>
              <li>Below 0.5%: Consider increasing usage</li>
              <li>Above 3%: Risk of keyword stuffing</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getKeywordTooltip(density: number): string {
  if (density < 0.5) return "Keyword density is low. Consider increasing usage naturally.";
  if (density > 3) return "Keyword density is high. Consider reducing to avoid over-optimization.";
  return "Keyword density is within optimal range.";
}