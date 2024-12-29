"use client";

import { HistoryStats } from "./history-stats";
import { HistoryChart } from "./history-chart";
import { HistoryList } from "./history-list";
import type { HistoricalAnalysis } from "@/lib/types/seo/history";
import { calculateHistoryStats } from "@/lib/utils/history";

interface HistoryViewProps {
  history: HistoricalAnalysis[];
}

export function HistoryView({ history }: HistoryViewProps) {
  const stats = calculateHistoryStats(history);

  return (
    <div className="space-y-4">
      <HistoryStats stats={stats} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <HistoryChart history={history} />
        <HistoryList history={history} />
      </div>
    </div>
  );
}