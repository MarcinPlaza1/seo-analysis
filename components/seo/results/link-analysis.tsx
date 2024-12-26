import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface LinkAnalysisProps {
  links: SEOAnalysisResult['links'];
}

export function LinkAnalysis({ links }: LinkAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Internal Links</span>
            <Badge>{links.internal}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">External Links</span>
            <Badge variant="secondary">{links.external}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Broken Links</span>
            <Badge variant="destructive">{links.broken}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}