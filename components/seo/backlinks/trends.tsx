"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendChart } from '../interactive/trend-chart';

interface BacklinkTrendsProps {
  url: string;
}

export function BacklinkTrends({ url }: BacklinkTrendsProps) {
  const [trends, setTrends] = useState<any>(null);

  useEffect(() => {
    // Simulate fetching trend data
    const mockTrends = generateMockTrends();
    setTrends(mockTrends);
  }, [url]);

  if (!trends) return null;

  return (
    <div className="grid gap-6">
      <TrendChart
        title="New Backlinks"
        data={trends.newBacklinks}
        metric=""
        trend={trends.newBacklinksTrend}
        changePercentage={trends.newBacklinksChange}
      />

      <TrendChart
        title="Domain Authority"
        data={trends.authority}
        metric=""
        trend={trends.authorityTrend}
        changePercentage={trends.authorityChange}
      />

      <TrendChart
        title="Referring Domains"
        data={trends.referringDomains}
        metric=""
        trend={trends.referringDomainsTrend}
        changePercentage={trends.referringDomainsChange}
      />
    </div>
  );
}

function generateMockTrends() {
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toISOString().split('T')[0];
  });

  return {
    newBacklinks: dates.map(date => ({
      date,
      value: Math.floor(Math.random() * 50) + 10,
    })),
    authority: dates.map(date => ({
      date,
      value: Math.floor(Math.random() * 20) + 30,
    })),
    referringDomains: dates.map(date => ({
      date,
      value: Math.floor(Math.random() * 30) + 20,
    })),
    newBacklinksTrend: "up",
    authorityTrend: "up",
    referringDomainsTrend: "stable",
    newBacklinksChange: 15,
    authorityChange: 8,
    referringDomainsChange: 2,
  };
}