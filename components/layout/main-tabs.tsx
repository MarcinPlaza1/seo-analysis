"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart2, BookOpen } from "lucide-react";

interface MainTabsProps {
  activeTab: 'analyzer' | 'guide';
  onChange: (value: 'analyzer' | 'guide') => void;
}

export function MainTabs({ activeTab, onChange }: MainTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
        <TabsTrigger value="analyzer" className="flex items-center gap-2">
          <BarChart2 className="h-4 w-4" />
          <span className="hidden sm:inline">SEO Analyzer</span>
        </TabsTrigger>
        <TabsTrigger value="guide" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span className="hidden sm:inline">Strategy Guide</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}