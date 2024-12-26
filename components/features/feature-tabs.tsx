"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Search, BarChart2, Globe, FileText } from "lucide-react";

const features = {
  analysis: {
    title: "SEO Analysis",
    description: "Comprehensive analysis of your website's SEO performance",
    items: [
      "Technical SEO audit",
      "Content optimization",
      "Mobile responsiveness check",
      "Page speed analysis"
    ]
  },
  keywords: {
    title: "Keyword Research",
    description: "Advanced keyword research and tracking tools",
    items: [
      "Keyword difficulty scoring",
      "Search volume trends",
      "Competitor keyword analysis",
      "Long-tail suggestions"
    ]
  },
  competitors: {
    title: "Competitor Analysis",
    description: "Monitor and outperform your competitors",
    items: [
      "Competitor tracking",
      "Backlink analysis",
      "Content gap analysis",
      "Market positioning"
    ]
  },
  reports: {
    title: "Custom Reports",
    description: "Generate detailed SEO reports and insights",
    items: [
      "White-label reports",
      "Custom branding",
      "PDF export",
      "Scheduled reports"
    ]
  }
};

export function FeatureTabs() {
  return (
    <Tabs defaultValue="analysis" className="mb-16">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
        <TabsTrigger value="analysis" className="gap-2">
          <BarChart2 className="h-4 w-4" />
          Analysis
        </TabsTrigger>
        <TabsTrigger value="keywords" className="gap-2">
          <Search className="h-4 w-4" />
          Keywords
        </TabsTrigger>
        <TabsTrigger value="competitors" className="gap-2">
          <Globe className="h-4 w-4" />
          Competitors
        </TabsTrigger>
        <TabsTrigger value="reports" className="gap-2">
          <FileText className="h-4 w-4" />
          Reports
        </TabsTrigger>
      </TabsList>

      {Object.entries(features).map(([key, feature]) => (
        <TabsContent key={key} value={key}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
              Feature Screenshot
            </div>
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}