"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe } from "lucide-react";

const competitors = [
  {
    domain: "competitor1.com",
    score: 88,
    traffic: 45000,
    keywords: 2300,
    overlap: 65
  },
  {
    domain: "competitor2.com",
    score: 82,
    traffic: 38000,
    keywords: 1800,
    overlap: 45
  },
  {
    domain: "competitor3.com",
    score: 91,
    traffic: 52000,
    keywords: 2800,
    overlap: 75
  }
];

export function CompetitorOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-6">
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-lg space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{competitor.domain}</p>
                      <p className="text-sm text-muted-foreground">
                        {competitor.traffic.toLocaleString()} monthly visits
                      </p>
                    </div>
                  </div>
                  <Badge variant={competitor.score >= 90 ? "default" : "secondary"}>
                    Score: {competitor.score}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Keyword Overlap</span>
                      <span>{competitor.overlap}%</span>
                    </div>
                    <Progress value={competitor.overlap} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Ranking Keywords</span>
                    <span>{competitor.keywords.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}