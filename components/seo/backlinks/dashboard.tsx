"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BacklinkAnalysis } from './backlink-analysis';
import { OpportunityFinder } from './opportunity-finder';
import { BacklinkMetrics } from './metrics';
import { BacklinkTrends } from './trends';
import { AnchorTextAnalysis } from './anchor-text-analysis';

interface BacklinkDashboardProps {
  url: string;
  niche: string;
  keywords: string[];
}

export function BacklinkDashboard({ url, niche, keywords }: BacklinkDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Overview Metrics */}
      <BacklinkMetrics url={url} />

      {/* Detailed Analysis Tabs */}
      <Tabs defaultValue="analysis" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="anchors">Anchor Text</TabsTrigger>
        </TabsList>

        <TabsContent value="analysis">
          <BacklinkAnalysis url={url} />
        </TabsContent>

        <TabsContent value="opportunities">
          <OpportunityFinder niche={niche} keywords={keywords} />
        </TabsContent>

        <TabsContent value="trends">
          <BacklinkTrends url={url} />
        </TabsContent>

        <TabsContent value="anchors">
          <AnchorTextAnalysis url={url} />
        </TabsContent>
      </Tabs>
    </div>
  );
}