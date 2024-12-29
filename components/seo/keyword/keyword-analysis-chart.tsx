"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import type { KeywordAnalysis } from "@/lib/types/seo/keyword";

interface KeywordAnalysisChartProps {
  analysis: KeywordAnalysis;
}

export function KeywordAnalysisChart({ analysis }: KeywordAnalysisChartProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Keyword Distribution</CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              Shows keyword density and distribution across content
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {analysis.topKeywords.slice(0, 5).map((keyword, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{keyword.word}</span>
                <span className={`text-sm ${getKeywordColor(keyword.density)}`}>
                  {keyword.density.toFixed(2)}%
                </span>
              </div>
              <Progress 
                value={Math.min(keyword.density * 20, 100)} 
                className={`h-2 ${getProgressColor(keyword.density)}`}
              />
              <p className="text-xs text-muted-foreground">
                Appears {keyword.count} times
              </p>
            </div>
          ))}

          <div className="pt-4 border-t">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Total Words</p>
                <p className="text-2xl font-bold">{analysis.totalWords}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Unique Words</p>
                <p className="text-2xl font-bold">{analysis.uniqueWords}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getKeywordColor(density: number): string {
  if (density > 3) return "text-red-500";
  if (density > 2) return "text-yellow-500";
  return "text-green-500";
}

function getProgressColor(density: number): string {
  if (density > 3) return "bg-red-200";
  if (density > 2) return "bg-yellow-200";
  return "";
}