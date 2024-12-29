"use client";

import { AlertCircle } from "lucide-react";

interface ImprovementSuggestionsProps {
  score: number;
}

export function ImprovementSuggestions({ score }: ImprovementSuggestionsProps) {
  if (score >= 70) return null;

  return (
    <div className="flex items-center gap-2 p-3 bg-yellow-500/10 text-yellow-500 rounded-lg text-sm mt-4">
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <div>
        <p className="font-medium">Readability Improvements Needed</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>Simplify complex sentences</li>
          <li>Use shorter paragraphs</li>
          <li>Add more transition words</li>
        </ul>
      </div>
    </div>
  );
}