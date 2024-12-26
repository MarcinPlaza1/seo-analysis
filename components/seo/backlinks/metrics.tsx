"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MetricCard } from '../interactive/metric-card';
import { Link, TrendingUp, Shield, Activity } from 'lucide-react';
import { analyzeBacklinks } from '@/lib/utils/backlinks/analyzer';

interface BacklinkMetricsProps {
  url: string;
}

export function BacklinkMetrics({ url }: BacklinkMetricsProps) {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await analyzeBacklinks(url);
      setMetrics(data.domainMetrics);
    };

    fetchMetrics();
  }, [url]);

  if (!metrics) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Backlinks"
        value={metrics.totalBacklinks}
        maxValue={10000}
        description="Total number of backlinks pointing to your domain"
        status={metrics.totalBacklinks > 1000 ? "success" : "warning"}
        icon={<Link className="h-4 w-4" />}
      />

      <MetricCard
        title="Domain Authority"
        value={Math.round(metrics.averageAuthority)}
        maxValue={100}
        description="Domain authority score based on backlink quality"
        status={metrics.averageAuthority > 40 ? "success" : "warning"}
        icon={<Shield className="h-4 w-4" />}
      />

      <MetricCard
        title="Referring Domains"
        value={metrics.uniqueDomains}
        maxValue={1000}
        description="Number of unique domains linking to your site"
        status={metrics.uniqueDomains > 100 ? "success" : "warning"}
        icon={<TrendingUp className="h-4 w-4" />}
      />

      <MetricCard
        title="DoFollow Ratio"
        value={Math.round(metrics.doFollowRatio * 100)}
        maxValue={100}
        description="Percentage of dofollow backlinks"
        status={metrics.doFollowRatio > 0.7 ? "success" : "warning"}
        icon={<Activity className="h-4 w-4" />}
      />
    </div>
  );
}