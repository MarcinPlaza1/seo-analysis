import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";

interface RecommendationsProps {
  results: SEOAnalysisResult;
}

export function Recommendations({ results }: RecommendationsProps) {
  const recommendations = [
    {
      title: "Meta Title",
      status: results.title.isOptimal ? "success" : "warning",
      description: results.title.isOptimal
        ? "Meta title length is optimal"
        : `Meta title length (${results.title.length}) should be between 50-60 characters`,
    },
    {
      title: "Meta Description",
      status: results.description.isOptimal ? "success" : "warning",
      description: results.description.isOptimal
        ? "Meta description length is optimal"
        : `Meta description length (${results.description.length}) should be between 150-160 characters`,
    },
    {
      title: "Heading Structure",
      status: results.headings.h1Count === 1 ? "success" : "error",
      description: results.headings.h1Count === 1
        ? "Page has one H1 heading"
        : `Page has ${results.headings.h1Count} H1 headings (should have exactly one)`,
    },
    {
      title: "Image Optimization",
      status: results.images.withoutAlt === 0 ? "success" : "warning",
      description: results.images.withoutAlt === 0
        ? "All images have alt text"
        : `${results.images.withoutAlt} images missing alt text`,
    },
    {
      title: "Mobile Responsiveness",
      status: results.mobile.isMobileResponsive ? "success" : "error",
      description: results.mobile.isMobileResponsive
        ? "Page is mobile-friendly"
        : "Page is not optimized for mobile devices",
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <Alert key={index} variant={rec.status === "error" ? "destructive" : "default"}>
              <div className="flex items-center gap-2">
                {getIcon(rec.status)}
                <AlertTitle>{rec.title}</AlertTitle>
              </div>
              <AlertDescription>{rec.description}</AlertDescription>
            </Alert>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}