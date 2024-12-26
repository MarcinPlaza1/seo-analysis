"use client";

import { Progress } from "@/components/ui/progress";

interface MetricProgressProps {
  value: number;
  status: "success" | "warning" | "error";
}

export function MetricProgress({ value, status }: MetricProgressProps) {
  const getStatusClass = () => {
    switch (status) {
      case "success": return "bg-green-100";
      case "warning": return "bg-yellow-100";
      case "error": return "bg-red-100";
      default: return "";
    }
  };

  return (
    <Progress 
      value={value} 
      className={`h-2 ${getStatusClass()}`}
    />
  );
}