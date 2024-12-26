"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import type { HistoricalAnalysis } from "@/lib/types/seo/history";

interface HistoryListProps {
  history: HistoricalAnalysis[];
}

export function HistoryList({ history }: HistoryListProps) {
  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <CardTitle>Analysis History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{item.url}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(item.date), 'PPp')}
                  </p>
                </div>
                <Badge
                  variant={item.score >= 80 ? "default" : 
                          item.score >= 60 ? "secondary" : "destructive"}
                >
                  Score: {Math.round(item.score)}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}