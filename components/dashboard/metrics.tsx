"use client";

import { Card } from "@/components/ui/card";
import { BarChart2, TrendingUp, Users, Search, Globe, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  {
    label: "Overall Score",
    value: "85/100",
    change: "+5%",
    trend: "up",
    icon: BarChart2,
  },
  {
    label: "Rankings",
    value: "12",
    change: "+3",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Organic Traffic",
    value: "2.4k",
    change: "+15%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Keywords",
    value: "156",
    change: "+8",
    trend: "up",
    icon: Search,
  },
  {
    label: "Backlinks",
    value: "843",
    change: "+12",
    trend: "up",
    icon: Globe,
  },
  {
    label: "Issues",
    value: "3",
    change: "-2",
    trend: "down",
    icon: AlertCircle,
  },
];

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <metric.icon className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-sm ${
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>
                  {metric.change}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}