"use client";

import { ReadabilityScore } from "@/lib/utils/readability";

interface ScoreCircleProps {
  readabilityScore: ReadabilityScore;
}

export function ScoreCircle({ readabilityScore }: ScoreCircleProps) {
  return (
    <div className="text-center mb-4">
      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary/20 relative">
        <div className="text-center">
          <div className={`text-3xl font-bold ${readabilityScore.color}`}>
            {Math.round(readabilityScore.score)}
          </div>
          <div className="text-sm font-medium">
            {readabilityScore.label}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {readabilityScore.description}
          </div>
        </div>
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-muted stroke-current"
            strokeWidth="4"
            fill="transparent"
            r="48"
            cx="50"
            cy="50"
          />
          <circle
            className={`${readabilityScore.color} stroke-current transition-all duration-300 ease-in-out`}
            strokeWidth="4"
            strokeLinecap="round"
            fill="transparent"
            r="48"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: `${2 * Math.PI * 48}`,
              strokeDashoffset: `${2 * Math.PI * 48 * (1 - readabilityScore.score / 100)}`,
            }}
          />
        </svg>
      </div>
    </div>
  );
}