"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const rankings = [
  {
    keyword: "SEO Analysis Tool",
    position: 3,
    change: 2,
    volume: 2400,
    trend: "up"
  },
  {
    keyword: "Website Analyzer",
    position: 5,
    change: -1,
    volume: 1800,
    trend: "down"
  },
  {
    keyword: "SEO Checker",
    position: 8,
    change: 0,
    volume: 3200,
    trend: "stable"
  },
  {
    keyword: "Technical SEO Tool",
    position: 4,
    change: 3,
    volume: 1500,
    trend: "up"
  }
];

export function KeywordRankings() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Keyword Rankings</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {rankings.map((keyword, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{keyword.keyword}</p>
                    <p className="text-sm text-muted-foreground">
                      Volume: {keyword.volume.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">
                      Position {keyword.position}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(keyword.trend)}
                      <span className={`text-sm ${
                        keyword.change > 0 ? "text-green-500" : 
                        keyword.change < 0 ? "text-red-500" : 
                        "text-yellow-500"
                      }`}>
                        {keyword.change > 0 ? "+" : ""}
                        {keyword.change}
                      </span>
                    </div>
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