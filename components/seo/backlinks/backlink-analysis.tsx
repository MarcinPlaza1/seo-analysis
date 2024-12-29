"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { analyzeBacklinks } from '@/lib/utils/backlinks/analyzer';

interface BacklinkAnalysisProps {
  url: string;
}

export function BacklinkAnalysis({ url }: BacklinkAnalysisProps) {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const data = await analyzeBacklinks(url);
        setAnalysis(data);
      } catch (error) {
        console.error('Backlink analysis failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [url]);

  if (loading) {
    return <div>Loading backlink analysis...</div>;
  }

  if (!analysis) {
    return <div>Failed to load backlink analysis</div>;
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Domain Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Backlinks</p>
              <p className="text-2xl font-bold">{analysis.domainMetrics.totalBacklinks}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Unique Domains</p>
              <p className="text-2xl font-bold">{analysis.domainMetrics.uniqueDomains}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">DoFollow Ratio</p>
              <p className="text-2xl font-bold">
                {(analysis.domainMetrics.doFollowRatio * 100).toFixed(1)}%
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Avg. Authority</p>
              <p className="text-2xl font-bold">
                {analysis.domainMetrics.averageAuthority.toFixed(1)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Backlinks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.backlinks.map((backlink: any, index: number) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
              >
                <div className="space-y-1">
                  <p className="font-medium">{new URL(backlink.url).hostname}</p>
                  <p className="text-sm text-muted-foreground">{backlink.anchorText}</p>
                  <div className="flex gap-2">
                    <Badge variant={backlink.isDoFollow ? "default" : "secondary"}>
                      {backlink.isDoFollow ? "DoFollow" : "NoFollow"}
                    </Badge>
                    <Badge variant="outline">DA: {backlink.authority}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    First seen: {backlink.firstSeen.toLocaleDateString()}
                  </p>
                  <Progress 
                    value={backlink.authority} 
                    className="w-24 h-2 mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}