"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { Info, BookOpen } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";
import { 
  calculateReadabilityScore, 
  getReadabilityLevel,
  calculateFleschScore 
} from "@/lib/utils/readability";
import { ScoreCircle } from "./readability/score-circle";
import { MetricsDisplay } from "./readability/metrics-display";
import { ImprovementSuggestions } from "./readability/improvement-suggestions";

interface ReadabilityScoreProps {
  readability: SEOAnalysisResult['content']['readability'];
}

export function ReadabilityScore({ readability }: ReadabilityScoreProps) {
  const score = calculateReadabilityScore(readability.averageWordsPerSentence);
  const readabilityLevel = getReadabilityLevel(score);
  const fleschScore = calculateFleschScore(readability.averageWordsPerSentence);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Readability Analysis
          </CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              Analyzes text complexity and readability
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <ScoreCircle readabilityScore={readabilityLevel} />
          
          <MetricsDisplay
            averageWordsPerSentence={readability.averageWordsPerSentence}
            fleschScore={fleschScore}
            wordCount={readability.wordCount}
            sentenceCount={readability.sentenceCount}
          />

          <ImprovementSuggestions score={score} />
        </div>
      </CardContent>
    </Card>
  );
}