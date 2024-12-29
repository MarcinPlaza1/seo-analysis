"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Loader2, Mail, ExternalLink } from "lucide-react";
import { findBacklinkOpportunities } from '@/lib/utils/backlinks/opportunities';

interface OpportunityFinderProps {
  niche: string;
  keywords: string[];
}

export function OpportunityFinder({ niche, keywords }: OpportunityFinderProps) {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await findBacklinkOpportunities(niche, keywords);
      setOpportunities(results);
    } catch (error) {
      console.error('Failed to find opportunities:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Backlink Opportunities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-4">
            <Button 
              onClick={handleSearch}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Find Opportunities
            </Button>
          </div>

          <div className="space-y-4">
            {opportunities.map((opp, index) => (
              <div 
                key={index}
                className="p-4 bg-muted/50 rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{opp.domain}</p>
                    <p className="text-sm text-muted-foreground">{opp.url}</p>
                  </div>
                  <div className="flex gap-2">
                    {opp.contactInfo?.email && (
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Authority</p>
                    <Progress 
                      value={opp.authority} 
                      className="w-24 h-2 mt-1"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Relevance</p>
                    <Progress 
                      value={opp.relevance * 100} 
                      className="w-24 h-2 mt-1"
                    />
                  </div>
                  <Badge variant={getStatusVariant(opp.status)}>
                    {opp.status}
                  </Badge>
                </div>
              </div>
            ))}

            {opportunities.length === 0 && !loading && (
              <div className="text-center text-muted-foreground py-8">
                Click "Find Opportunities" to discover potential backlink sources
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getStatusVariant(status: string) {
  switch (status) {
    case 'secured': return 'default';
    case 'negotiating': return 'secondary';
    case 'contacted': return 'outline';
    default: return 'secondary';
  }
}