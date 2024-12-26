"use client";

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart2, 
  Search, 
  Link2, 
  FileText,
  Smartphone,
  Settings,
  History 
} from "lucide-react";

interface AnalysisTabsProps {
  children: React.ReactNode;
  defaultValue?: string;
}

export function AnalysisTabs({ children, defaultValue = "overview" }: AnalysisTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart2 },
    { id: "keywords", label: "Keywords", icon: Search },
    { id: "backlinks", label: "Backlinks", icon: Link2 },
    { id: "content", label: "Content", icon: FileText },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "technical", label: "Technical", icon: Settings },
    { id: "history", label: "History", icon: History },
  ];

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="space-y-4"
    >
      <TabsList className="grid grid-cols-7 lg:w-[600px] mx-auto">
        {tabs.map(tab => (
          <TabsTrigger 
            key={tab.id}
            value={tab.id}
            className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <tab.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}