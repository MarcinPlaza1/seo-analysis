"use client";

interface BacklinkOpportunity {
  url: string;
  domain: string;
  authority: number;
  relevance: number;
  contactInfo?: {
    email?: string;
    contact?: string;
  };
  status: 'new' | 'contacted' | 'negotiating' | 'secured';
}

export async function findBacklinkOpportunities(
  niche: string,
  keywords: string[]
): Promise<BacklinkOpportunity[]> {
  try {
    // Simulate opportunity discovery
    // In production, integrate with prospecting tools or APIs
    const opportunities = await discoverOpportunities(niche, keywords);
    return filterAndRankOpportunities(opportunities);
  } catch (error) {
    throw new Error(`Failed to find opportunities: ${error.message}`);
  }
}

async function discoverOpportunities(
  niche: string,
  keywords: string[]
): Promise<BacklinkOpportunity[]> {
  // Simulated data - replace with actual discovery logic
  return [
    {
      url: 'https://example.com/blog',
      domain: 'example.com',
      authority: 55,
      relevance: 0.85,
      contactInfo: {
        email: 'contact@example.com',
      },
      status: 'new',
    },
    // Add more opportunities...
  ];
}

function filterAndRankOpportunities(
  opportunities: BacklinkOpportunity[]
): BacklinkOpportunity[] {
  return opportunities
    .filter(opp => opp.authority >= 30 && opp.relevance >= 0.7)
    .sort((a, b) => {
      // Score based on authority and relevance
      const scoreA = (a.authority * 0.6) + (a.relevance * 0.4);
      const scoreB = (b.authority * 0.6) + (b.relevance * 0.4);
      return scoreB - scoreA;
    });
}