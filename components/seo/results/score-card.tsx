import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ScoreCardProps {
  score: number;
}

export function ScoreCard({ score }: ScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Fair";
    return "Needs Improvement";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall SEO Score</CardTitle>
        <CardDescription>Based on comprehensive analysis of key SEO metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-muted stroke-current"
                strokeWidth="10"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className={cn("stroke-current transition-all duration-500", getScoreColor(score))}
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                style={{
                  strokeDasharray: `${2 * Math.PI * 40}`,
                  strokeDashoffset: `${2 * Math.PI * 40 * (1 - score / 100)}`,
                  transform: "rotate(-90deg)",
                  transformOrigin: "50% 50%",
                }}
              />
              <text
                x="50"
                y="50"
                className="text-2xl font-bold"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {score}
              </text>
            </svg>
          </div>

          <div className="text-center">
            <p className={cn("text-lg font-semibold", getScoreColor(score))}>
              {getScoreLabel(score)}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Your website's SEO performance
            </p>
          </div>

          <div className="w-full grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {score >= 70 ? "✓" : "✗"}
              </div>
              <p className="text-sm text-muted-foreground">Technical SEO</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {score >= 60 ? "✓" : "✗"}
              </div>
              <p className="text-sm text-muted-foreground">Content</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {score >= 80 ? "✓" : "✗"}
              </div>
              <p className="text-sm text-muted-foreground">Mobile</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}