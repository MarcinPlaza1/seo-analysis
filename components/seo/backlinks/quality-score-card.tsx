"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface QualityScoreCardProps {
  score: number;
  breakdown: {
    authority: number;
    trust: number;
    relevance: number;
    technical: number;
  };
  category: 'excellent' | 'good' | 'average' | 'poor';
  recommendations: string[];
}

export function QualityScoreCard({
  score,
  breakdown,
  category,
  recommendations,
}: QualityScoreCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Backlink Quality Score
          </CardTitle>
          <Badge variant={getScoreVariant(category)}>
            {score} - {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Score Breakdown */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Authority Score</span>
                <span>{Math.round(breakdown.authority)}%</span>
              </div>
              <Progress value={breakdown.authority} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Trust Score</span>
                <span>{Math.round(breakdown.trust)}%</span>
              </div>
              <Progress value={breakdown.trust} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Relevance Score</span>
                <span>{Math.round(breakdown.relevance)}%</span>
              </div>
              <Progress value={breakdown.relevance} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Technical Score</span>
                <span>{Math.round(breakdown.technical)}%</span>
              </div>
              <Progress value={breakdown.technical} className="h-2" />
            </div>
          </motion.div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="mt-2 space-y-2">
                  {recommendations.map((recommendation, index) => (
                    <p key={index} className="text-sm">• {recommendation}</p>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function getScoreVariant(category: string) {
  switch (category) {
    case 'excellent': return 'default';
    case 'good': return 'secondary';
    case 'average': return 'outline';
    default: return 'destructive';
  }
}