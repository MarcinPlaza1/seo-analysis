"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { RecommendationContent } from "./recommendation-content";
import type { SEOStrategySection } from "@/lib/types/seo/strategy";

interface StrategySectionProps {
  section: SEOStrategySection;
  icons: Record<string, React.ComponentType>;
}

export function StrategySection({ section, icons }: StrategySectionProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {icons[section.icon as keyof typeof icons] && 
              React.createElement(icons[section.icon as keyof typeof icons], { 
                className: "h-5 w-5" 
              })
            }
            {section.title}
          </CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              Click recommendations to see detailed implementation steps
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-sm text-muted-foreground">{section.description}</p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {section.recommendations.map((rec, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  {rec.title}
                  <Badge variant={getPriorityColor(rec.priority)}>
                    {rec.priority}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <RecommendationContent recommendation={rec} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}