"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface SocialPreviewProps {
  url: string;
  results: SEOAnalysisResult;
}

export function SocialPreview({ url, results }: SocialPreviewProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Facebook Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 max-w-[500px]">
            <div className="aspect-video bg-muted mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              {results.title.content}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {results.description.content}
            </p>
            <p className="text-xs text-muted-foreground uppercase">
              {url}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Twitter Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 max-w-[500px]">
            <div className="aspect-video bg-muted mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold mb-2">
              {results.title.content}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {results.description.content}
            </p>
            <p className="text-xs text-muted-foreground">
              {url}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}