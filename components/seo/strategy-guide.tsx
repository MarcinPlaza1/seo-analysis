"use client";

import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { seoStrategyGuide } from "@/lib/data/seo-strategy";
import { FileText, Settings, Link } from "lucide-react";
import { StrategySection } from "./strategy/strategy-section";
import { StrategyHeader } from "./strategy/strategy-header";

const icons = {
  FileText,
  Settings,
  Link,
};

export function StrategyGuide() {
  return (
    <div className="space-y-6">
      <StrategyHeader />

      <Tabs defaultValue="onPageSEO" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
          {Object.entries(seoStrategyGuide).map(([key, section]) => (
            <TabsTrigger key={key} value={key} className="gap-2">
              {icons[section.icon as keyof typeof icons] && 
                React.createElement(icons[section.icon as keyof typeof icons], { 
                  className: "h-4 w-4" 
                })
              }
              <span className="hidden sm:inline">{section.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(seoStrategyGuide).map(([key, section]) => (
          <TabsContent key={key} value={key} className="space-y-6">
            <StrategySection section={section} icons={icons} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}