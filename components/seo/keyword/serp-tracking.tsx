"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { trackKeywordRankings } from "@/lib/utils/keywords/serp-tracker";
import { useState, useEffect } from "react";

interface SERPTrackingProps {
  domain: string;
  keywords: string[];
}

export function SERPTracking({ domain, keywords }: SERPTrackingProps) {
  const [rankings, setRankings] = useState<Array<{
    keyword: string;
    rankings: Array<{ date: string; position: number }>;
    trend: 'up' | 'down' | 'stable';
  }>>([]);

  useEffect(() => {
    const fetchRankings = async () => {
      const data = await trackKeywordRankings(domain, keywords);
      setRankings(data);
    };

    fetchRankings();
  }, [domain, keywords]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>SERP Position Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {rankings.map((keyword, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{keyword.keyword}</span>
                  <Badge variant={getTrendVariant(keyword.trend)}>
                    {getTrendIcon(keyword.trend)}
                    <span className="ml-1">
                      {getPositionChange(keyword.rankings)}
                    </span>
                  </Badge>
                </div>
              </div>

              <div className="h-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={keyword.rankings}>
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }}
                      interval="preserveStartEnd"
                    />
                    <YAxis 
                      reversed 
                      domain={[1, 'dataMax']}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="position"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function getTrendVariant(trend: 'up' | 'down' | 'stable'): "default" | "secondary" | "destructive" {
  switch (trend) {
    case 'up': return "default";
    case 'down': return "destructive";
    default: return "secondary";
  }
}

function getTrendIcon(trend: 'up' | 'down' | 'stable') {
  switch (trend) {
    case 'up': return <TrendingUp className="h-3 w-3" />;
    case 'down': return <TrendingDown className="h-3 w-3" />;
    default: return <Minus className="h-3 w-3" />;
  }
}

function getPositionChange(rankings: Array<{ position: number }>): string {
  if (rankings.length < 2) return "No change";
  const first = rankings[0].position;
  const last = rankings[rankings.length - 1].position;
  const change = first - last;
  return change > 0 ? `+${change}` : change.toString();
}