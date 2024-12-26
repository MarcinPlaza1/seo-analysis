"use client";

import { Badge } from "@/components/ui/badge";
import { Tool } from "lucide-react";

interface RecommendationToolsProps {
  tools: string[];
}

export function RecommendationTools({ tools }: RecommendationToolsProps) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
        <Tool className="h-4 w-4" />
        Recommended Tools
      </h4>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <Badge key={i} variant="outline" className="hover:bg-primary/10 transition-colors">
            {tool}
          </Badge>
        ))}
      </div>
    </div>
  );
}