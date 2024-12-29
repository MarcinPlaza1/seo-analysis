"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, ShieldAlert, ShieldCheck, Lock } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface SecurityCheckProps {
  security: SEOAnalysisResult['technical']['security'];
}

export function SecurityCheck({ security }: SecurityCheckProps) {
  const calculateSecurityScore = () => {
    let score = 0;
    if (security.https) score += 40;
    if (security.hsts) score += 30;
    if (!security.mixedContent) score += 30;
    return score;
  };

  const score = calculateSecurityScore();

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <ShieldCheck className="h-8 w-8 text-green-500" />;
    if (score >= 70) return <Shield className="h-8 w-8 text-yellow-500" />;
    return <ShieldAlert className="h-8 w-8 text-red-500" />;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Security Analysis</CardTitle>
          {getScoreIcon(score)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
              {score}/100
            </div>
            <p className="text-sm text-muted-foreground mt-1">Security Score</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">HTTPS</span>
                <span className={`text-sm ${security.https ? "text-green-500" : "text-red-500"}`}>
                  {security.https ? "Enabled" : "Disabled"}
                </span>
              </div>
              <Progress value={security.https ? 100 : 0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">HSTS</span>
                <span className={`text-sm ${security.hsts ? "text-green-500" : "text-red-500"}`}>
                  {security.hsts ? "Enabled" : "Disabled"}
                </span>
              </div>
              <Progress value={security.hsts ? 100 : 0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Mixed Content</span>
                <span className={`text-sm ${!security.mixedContent ? "text-green-500" : "text-red-500"}`}>
                  {!security.mixedContent ? "None Detected" : "Issues Found"}
                </span>
              </div>
              <Progress value={!security.mixedContent ? 100 : 0} className="h-2" />
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Security Recommendations
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              {!security.https && <li>Enable HTTPS for secure data transmission</li>}
              {!security.hsts && <li>Implement HSTS for enhanced security</li>}
              {security.mixedContent && <li>Fix mixed content issues</li>}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}