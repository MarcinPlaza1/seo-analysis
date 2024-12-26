"use client";

import type { SEOAnalysisResult } from "@/lib/types/seo";
import { calculateSEOScore } from "@/lib/utils/score";
import { ScoreCard } from "./results/score-card";
import { MetaInfo } from "./results/meta-info";
import { HeadingStructure } from "./results/heading-structure";
import { ImageAnalysis } from "./results/image-analysis";
import { LinkAnalysis } from "./results/link-analysis";
import { PerformanceMetrics } from "./results/performance-metrics";
import { Recommendations } from "./results/recommendations";
import { KeywordAnalysis } from "./results/keyword-analysis";
import { ReadabilityScore } from "./results/readability-score";
import { SecurityCheck } from "./results/security-check";
import { MobileInteractions } from "./results/mobile-interactions";
import { ExportButton } from "./results/export-button";

interface SEOResultsProps {
  results: SEOAnalysisResult;
  url: string;
}

export function SEOResults({ results, url }: SEOResultsProps) {
  const score = calculateSEOScore(results);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">SEO Analysis Results</h2>
        <div className="w-full sm:w-auto">
          <ExportButton results={results} url={url} />
        </div>
      </div>

      <ScoreCard score={score} />
      <Recommendations results={results} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <MetaInfo 
          title={results.title} 
          description={results.description} 
        />
        <HeadingStructure headings={results.headings} />
        <ImageAnalysis images={results.images} />
        <LinkAnalysis links={results.links} />
        <PerformanceMetrics metrics={results.performance} />
        <KeywordAnalysis keywords={results.keywords} />
        <ReadabilityScore readability={results.content.readability} />
        <SecurityCheck security={results.technical.security} />
        <MobileInteractions mobile={results.mobile} />
      </div>
    </div>
  );
}