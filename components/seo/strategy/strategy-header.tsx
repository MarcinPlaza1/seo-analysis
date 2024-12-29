"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Settings, Link, BarChart } from "lucide-react";

export function StrategyHeader() {
  const categories = [
    { icon: FileText, label: "On-Page SEO", description: "Content and meta optimization" },
    { icon: Settings, label: "Technical SEO", description: "Performance and structure" },
    { icon: BarChart, label: "Content Strategy", description: "Quality and relevance" },
    { icon: Link, label: "Link Building", description: "Authority and reach" },
  ];

  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Comprehensive SEO Strategy Guide</h2>
        <p className="text-muted-foreground">
          Follow these actionable recommendations to improve your website's search engine visibility
          and organic traffic using sustainable, white-hat techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <category.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}