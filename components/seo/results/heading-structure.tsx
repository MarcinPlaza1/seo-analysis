import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface HeadingStructureProps {
  headings: SEOAnalysisResult['headings'];
}

export function HeadingStructure({ headings }: HeadingStructureProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Heading Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(headings).map(([tag, count]) => (
            tag !== 'structure' && (
              <div key={tag} className="flex justify-between items-center">
                <span className="text-sm">{tag.toUpperCase()}</span>
                <Badge variant="secondary">{count}</Badge>
              </div>
            )
          ))}
        </div>
      </CardContent>
    </Card>
  );
}