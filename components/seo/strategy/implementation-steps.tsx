"use client";

import { CheckCircle } from "lucide-react";

interface ImplementationStepsProps {
  steps: string[];
}

export function ImplementationSteps({ steps }: ImplementationStepsProps) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
        <CheckCircle className="h-4 w-4" />
        Implementation Steps
      </h4>
      <ul className="grid gap-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1">•</span>
            <span className="flex-1">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}