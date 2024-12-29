"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Loader2, Search } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";
import { analyzePage } from "@/lib/utils/seo-analyzer";
import { CompetitorMetrics } from "./competitor/competitor-metrics";
import { KeywordComparison } from "./competitor/keyword-comparison";
import { PerformanceComparison } from "./competitor/performance-comparison";

interface CompetitorComparisonProps {
  url: string;
  results: SEOAnalysisResult;
}

export function CompetitorComparison({ url, results }: CompetitorComparisonProps) {
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [competitorResults, setCompetitorResults] = useState<SEOAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeCompetitor = async () => {
    if (!competitorUrl) return;

    try {
      setLoading(true);
      setError(null);
      const analysis = await analyzePage(competitorUrl);
      setCompetitorResults(analysis);
    } catch (error) {
      setError("Failed to analyze competitor website. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Compare with Competitor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter competitor's URL"
                value={competitorUrl}
                onChange={(e) => setCompetitorUrl(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button 
              onClick={analyzeCompetitor} 
              disabled={loading || !competitorUrl}
              className="w-full sm:w-auto"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Analyze Competitor"
              )}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {competitorResults && (
        <Tabs defaultValue="metrics" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="metrics">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics">
            <CompetitorMetrics
              yourMetrics={results}
              competitorMetrics={competitorResults}
            />
          </TabsContent>

          <TabsContent value="keywords">
            <KeywordComparison
              yourKeywords={results.keywords}
              competitorKeywords={competitorResults.keywords}
            />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceComparison
              yourPerformance={results.performance}
              competitorPerformance={competitorResults.performance}
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}