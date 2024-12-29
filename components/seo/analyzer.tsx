"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOResults } from "./results";
import { CompetitorComparison } from "./competitor-comparison";
import { SocialPreview } from "./social-preview";
import { HistoryView } from "./history-view";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Globe, History, Share2, BarChart2 } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";
import { analyzePage } from "@/lib/utils/seo-analyzer";
import { cn } from "@/lib/utils";

export function SEOAnalyzer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SEOAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [analysisHistory, setAnalysisHistory] = useState<Array<{
    url: string;
    date: Date;
    score: number;
  }>>([]);

  const handleAnalysis = async () => {
    if (!url) return;

    try {
      setLoading(true);
      setError(null);
      const analysis = await analyzePage(url);
      setResults(analysis);
      
      setAnalysisHistory(prev => [
        { url, date: new Date(), score: calculateScore(analysis) },
        ...prev.slice(0, 9),
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateScore = (analysis: SEOAnalysisResult) => {
    return 85; // Placeholder
  };

  return (
    <div className="space-y-6">
      <Card className="p-4 sm:p-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-9 text-sm sm:text-base"
              />
            </div>
            <Button 
              onClick={handleAnalysis} 
              disabled={loading}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <BarChart2 className="mr-2 h-4 w-4" />
              )}
              Analyze Website
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription className="text-sm">{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </Card>

      {results && (
        <Tabs defaultValue="results" className="space-y-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full">
            <TabsTrigger value="results" className="gap-2 text-xs sm:text-sm">
              <BarChart2 className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="competitors" className="gap-2 text-xs sm:text-sm">
              <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Competitors</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="gap-2 text-xs sm:text-sm">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2 text-xs sm:text-sm">
              <History className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="results" className={cn(
            "rounded-lg transition-all duration-500",
            loading && "opacity-50"
          )}>
            <SEOResults results={results} />
          </TabsContent>
          
          <TabsContent value="competitors">
            <CompetitorComparison url={url} results={results} />
          </TabsContent>
          
          <TabsContent value="social">
            <SocialPreview url={url} results={results} />
          </TabsContent>

          <TabsContent value="history">
            <HistoryView history={analysisHistory} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}