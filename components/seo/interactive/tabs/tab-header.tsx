"use client";

import { TabsTrigger } from "@/components/ui/tabs";
import { LucideIcon } from "lucide-react";

interface TabHeaderProps {
  id: string;
  label: string;
  icon: LucideIcon;
}

export function TabHeader({ id, label, icon: Icon }: TabHeaderProps) {
  return (
    <TabsTrigger 
      value={id}
      className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </TabsTrigger>
  );
}