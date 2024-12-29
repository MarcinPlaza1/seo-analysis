"use client";

import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface MetricsDisplayProps {
  averageWordsPerSentence: number;
  fleschScore: number;
  wordCount: number;
  sentenceCount: number;
}

export function MetricsDisplay({
  averageWordsPerSentence,
  fleschScore,
  wordCount,
  sentenceCount,
}: MetricsDisplayProps) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Words per Sentence</span>
            <Tooltip content="Optimal range: 15-20 words per sentence">
              <Info className="h-3 w-3 text-muted-foreground" />
            </Tooltip>
          </div>
          <span className={`text-sm ${
            averageWordsPerSentence >= 15 && averageWordsPerSentence <= 20 
              ? "text-green-500" 
              : "text-yellow-500"
          }`}>
            {averageWordsPerSentence.toFixed(1)}
          </span>
        </div>
        <Progress 
          value={Math.min((averageWordsPerSentence / 20) * 100, 100)} 
          className="h-2"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Flesch Reading Ease</span>
            <Tooltip content="Higher score indicates easier readability">
              <Info className="h-3 w-3 text-muted-foreground" />
            </Tooltip>
          </div>
          <span className="text-sm">{Math.round(fleschScore)}</span>
        </div>
        <Progress value={fleschScore} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Total Words</p>
            <Tooltip content="Total word count in the content">
              <Info className="h-3 w-3 text-muted-foreground" />
            </Tooltip>
          </div>
          <p className="text-lg font-semibold">{wordCount}</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Total Sentences</p>
            <Tooltip content="Number of sentences in the content">
              <Info className="h-3 w-3 text-muted-foreground" />
            </Tooltip>
          </div>
          <p className="text-lg font-semibold">{sentenceCount}</p>
        </div>
      </div>
    </div>
  );
}