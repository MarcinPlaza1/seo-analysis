import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface ImageAnalysisProps {
  images: SEOAnalysisResult['images'];
}

export function ImageAnalysis({ images }: ImageAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Images</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Total Images</span>
            <Badge>{images.total}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">With Alt Text</span>
            <Badge variant="secondary">{images.withAlt}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Missing Alt Text</span>
            <Badge variant="destructive">{images.withoutAlt}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}