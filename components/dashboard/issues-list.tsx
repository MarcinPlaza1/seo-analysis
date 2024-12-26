"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";

const issues = [
  {
    title: "Missing meta descriptions",
    description: "3 pages are missing meta descriptions",
    severity: "high",
    status: "open",
    pages: ["/blog", "/products", "/about"]
  },
  {
    title: "Slow page load time",
    description: "Homepage load time exceeds 3 seconds",
    severity: "medium",
    status: "in-progress",
    pages: ["/"]
  },
  {
    title: "Broken links fixed",
    description: "All broken links have been resolved",
    severity: "low",
    status: "resolved",
    pages: []
  }
];

export function IssuesList() {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge variant="destructive">Open</Badge>;
      case "in-progress":
        return <Badge variant="secondary">In Progress</Badge>;
      default:
        return <Badge variant="default">Resolved</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Issues</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {issues.map((issue, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-lg space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getSeverityIcon(issue.severity)}
                    <div>
                      <p className="font-medium">{issue.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                  {getStatusBadge(issue.status)}
                </div>

                {issue.pages.length > 0 && (
                  <div className="pl-8">
                    <p className="text-sm text-muted-foreground mb-2">
                      Affected pages:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {issue.pages.map((page, i) => (
                        <Badge key={i} variant="outline">
                          {page}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}