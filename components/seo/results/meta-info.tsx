import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface MetaInfoProps {
  title: SEOAnalysisResult['title'];
  description: SEOAnalysisResult['description'];
}

export function MetaInfo({ title, description }: MetaInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meta Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Title</h4>
            <p className="text-sm">{title.content}</p>
            <Badge
              variant={title.isOptimal ? "default" : "destructive"}
              className="mt-2"
            >
              {title.length} characters
            </Badge>
          </div>
          <div>
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm">{description.content}</p>
            <Badge
              variant={description.isOptimal ? "default" : "destructive"}
              className="mt-2"
            >
              {description.length} characters
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}