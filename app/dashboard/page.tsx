"use client";

import { PageContainer } from '@/components/layout/page-container';
import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardMetrics } from '@/components/dashboard/metrics';
import { DashboardCharts } from '@/components/dashboard/charts';
import { RecentAnalyses } from '@/components/dashboard/recent-analyses';
import { KeywordRankings } from '@/components/dashboard/keyword-rankings';
import { CompetitorOverview } from '@/components/dashboard/competitor-overview';
import { IssuesList } from '@/components/dashboard/issues-list';

export default function DashboardPage() {
  return (
    <PageContainer>
      <DashboardHeader />
      <div className="space-y-8">
        <DashboardMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DashboardCharts />
          <RecentAnalyses />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <KeywordRankings />
          <CompetitorOverview />
        </div>
        <IssuesList />
      </div>
    </PageContainer>
  );
}