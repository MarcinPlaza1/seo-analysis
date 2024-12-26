"use client";

interface SERPResult {
  keyword: string;
  position: number;
  url: string;
  title: string;
  snippet: string;
}

interface KeywordRankingData {
  keyword: string;
  rankings: {
    date: string;
    position: number;
  }[];
  trend: 'up' | 'down' | 'stable';
}

export async function trackKeywordRankings(
  domain: string,
  keywords: string[]
): Promise<KeywordRankingData[]> {
  const rankings: KeywordRankingData[] = [];
  
  for (const keyword of keywords) {
    // Simulate SERP tracking (in real implementation, use a SERP API)
    const rankingData = await simulateRankingData(domain, keyword);
    rankings.push(rankingData);
  }
  
  return rankings;
}

// Simulate ranking data (replace with actual SERP API in production)
async function simulateRankingData(
  domain: string,
  keyword: string
): Promise<KeywordRankingData> {
  const today = new Date();
  const rankings = Array.from({ length: 30 }, (_, i) => ({
    date: new Date(today.getTime() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    position: Math.floor(Math.random() * 20) + 1,
  }));
  
  const trend = calculateTrend(rankings);
  
  return {
    keyword,
    rankings: rankings.reverse(),
    trend,
  };
}

function calculateTrend(
  rankings: { position: number }[]
): 'up' | 'down' | 'stable' {
  if (rankings.length < 2) return 'stable';
  
  const first = rankings[0].position;
  const last = rankings[rankings.length - 1].position;
  
  if (last < first) return 'up';
  if (last > first) return 'down';
  return 'stable';
}