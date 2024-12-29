"use client";

import { PageContainer } from '@/components/layout/page-container';
import { AboutHero } from '@/components/about/hero';
import { AboutMission } from '@/components/about/mission';
import { AboutTeam } from '@/components/about/team';
import { AboutValues } from '@/components/about/values';
import { AboutStats } from '@/components/about/stats';
import { AboutTimeline } from '@/components/about/timeline';

export default function AboutPage() {
  return (
    <PageContainer>
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutTimeline />
    </PageContainer>
  );
}