"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, TrendingUp, TrendingDown } from "lucide-react";
import { generateKeywordSuggestions } from "@/lib/utils/keywords/generator";

interface KeywordSuggestionsProps {
  seedKeyword: string;
}

export function KeywordSuggestions({ seedKeyword }: KeywordSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<Array<{
    keyword: string;
    relevance: number;
    searchVolume: number;
    difficulty: number;
  }>>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateSuggestions = async () => {
    setLoading(true);
    try {
      const results = await generateKeywordSuggestions(seedKeyword);
      setSuggestions(results);
    } catch (error) {
      console.error("Failed to generate suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Keyword Suggestions</CardTitle>
          <Button 
            onClick={handleGenerateSuggestions}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : null}
            Generate Ideas
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
            >
              <div>
                <p className="font-medium">{suggestion.keyword}</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline">
                    Vol: {suggestion.searchVolume}
                  </Badge>
                  <Badge 
                    variant={getDifficultyVariant(suggestion.difficulty)}
                  >
                    KD: {suggestion.difficulty}%
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {suggestion.relevance >= 0.8 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-yellow-500" />
                )}
              </div>
            </div>
          ))}

          {suggestions.length === 0 && !loading && (
            <div className="text-center text-muted-foreground py-8">
              Click "Generate Ideas" to get keyword suggestions
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function getDifficultyVariant(difficulty: number): "default" | "secondary" | "destructive" {
  if (difficulty <= 30) return "default";
  if (difficulty <= 60) return "secondary";
  return "destructive";
}