"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

interface MetricCardProps {
  title: string;
  value: number;
  maxValue: number;
  description: string;
  status: "success" | "warning" | "error";
  icon: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  maxValue,
  description,
  status,
  icon,
}: MetricCardProps) {
  const percentage = (value / maxValue) * 100;

  const statusColors = {
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              {icon}
              <h3 className="font-medium">{title}</h3>
            </div>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>{description}</TooltipContent>
            </Tooltip>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-2xl font-bold ${statusColors[status]}`}>
                {value}
              </span>
              <span className="text-sm text-muted-foreground">
                / {maxValue}
              </span>
            </div>
            <Progress 
              value={percentage} 
              className={`h-2 ${
                status === "success" ? "bg-green-100" :
                status === "warning" ? "bg-yellow-100" :
                "bg-red-100"
              }`}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}