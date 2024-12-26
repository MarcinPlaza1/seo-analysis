"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const analyses = [
  {
    url: "https://example.com",
    date: "2024-01-15",
    score: 85,
    issues: 3,
  },
  {
    url: "https://example.com/blog",
    date: "2024-01-14",
    score: 78,
    issues: 5,
  },
  {
    url: "https://example.com/products",
    date: "2024-01-13",
    score: 92,
    issues: 1,
  },
];

export function RecentAnalyses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Analyses</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {analyses.map((analysis, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
              >
                <div>
                  <p className="font-medium truncate max-w-[200px]">{analysis.url}</p>
                  <p className="text-sm text-muted-foreground">{analysis.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={analysis.score >= 90 ? "default" : "secondary"}>
                    {analysis.score}/100
                  </Badge>
                  <Badge variant="outline">{analysis.issues} issues</Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}