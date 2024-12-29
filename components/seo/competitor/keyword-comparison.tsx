"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface KeywordComparisonProps {
  yourKeywords: SEOAnalysisResult['keywords'];
  competitorKeywords: SEOAnalysisResult['keywords'];
}

export function KeywordComparison({ yourKeywords, competitorKeywords }: KeywordComparisonProps) {
  const commonKeywords = findCommonKeywords(yourKeywords, competitorKeywords);
  const uniqueKeywords = findUniqueKeywords(yourKeywords, competitorKeywords);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Keyword Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Common Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {commonKeywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {keyword.word} ({keyword.yourDensity.toFixed(2)}% vs {keyword.theirDensity.toFixed(2)}%)
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Unique Keywords</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Your Unique Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {uniqueKeywords.yours.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword.word} ({keyword.density.toFixed(2)}%)
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Competitor's Unique Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {uniqueKeywords.competitor.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {keyword.word} ({keyword.density.toFixed(2)}%)
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function findCommonKeywords(yours: SEOAnalysisResult['keywords'], theirs: SEOAnalysisResult['keywords']) {
  const common: Array<{ word: string; yourDensity: number; theirDensity: number }> = [];
  
  yours.topKeywords.forEach(yourKeyword => {
    const theirKeyword = theirs.topKeywords.find(k => k.word === yourKeyword.word);
    if (theirKeyword) {
      common.push({
        word: yourKeyword.word,
        yourDensity: yourKeyword.density,
        theirDensity: theirKeyword.density,
      });
    }
  });

  return common;
}

function findUniqueKeywords(yours: SEOAnalysisResult['keywords'], theirs: SEOAnalysisResult['keywords']) {
  const theirWords = new Set(theirs.topKeywords.map(k => k.word));
  const yourWords = new Set(yours.topKeywords.map(k => k.word));

  return {
    yours: yours.topKeywords.filter(k => !theirWords.has(k.word)),
    competitor: theirs.topKeywords.filter(k => !yourWords.has(k.word)),
  };
}