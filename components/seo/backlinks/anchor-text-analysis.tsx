"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface AnchorTextAnalysisProps {
  url: string;
}

export function AnchorTextAnalysis({ url }: AnchorTextAnalysisProps) {
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    // Simulate fetching anchor text data
    const mockData = generateMockAnchorData();
    setAnalysis(mockData);
  }, [url]);

  if (!analysis) return null;

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Anchor Text Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analysis.distribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {analysis.distribution.map((entry: any, index: number) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Top Anchor Texts */}
            <div className="space-y-4">
              {analysis.topAnchors.map((anchor: any, index: number) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{anchor.text}</span>
                    <Badge variant="outline">{anchor.count} links</Badge>
                  </div>
                  <Progress 
                    value={anchor.percentage} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {anchor.percentage}% of total backlinks
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function generateMockAnchorData() {
  return {
    distribution: [
      { name: 'Brand', value: 40 },
      { name: 'Exact Match', value: 20 },
      { name: 'Partial Match', value: 15 },
      { name: 'Generic', value: 15 },
      { name: 'URL', value: 10 },
    ],
    topAnchors: [
      { text: 'Brand Name', count: 156, percentage: 40 },
      { text: 'Target Keyword', count: 78, percentage: 20 },
      { text: 'Partial Keyword', count: 58, percentage: 15 },
      { text: 'Click Here', count: 58, percentage: 15 },
      { text: 'example.com', count: 39, percentage: 10 },
    ],
  };
}