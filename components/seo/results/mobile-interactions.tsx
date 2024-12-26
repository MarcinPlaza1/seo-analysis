"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Tablet, Monitor, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileInteractionsProps {
  mobile: {
    isMobileResponsive: boolean;
    viewport: boolean;
    textReadability: boolean;
  };
}

export function MobileInteractions({ mobile }: MobileInteractionsProps) {
  const [selectedDevice, setSelectedDevice] = useState<"mobile" | "tablet" | "desktop">("mobile");
  const [isExpanded, setIsExpanded] = useState(false);

  const devices = {
    mobile: { icon: Smartphone, width: "320px" },
    tablet: { icon: Tablet, width: "768px" },
    desktop: { icon: Monitor, width: "1280px" },
  };

  const getScoreForDevice = (device: keyof typeof devices) => {
    let score = 0;
    if (mobile.isMobileResponsive) score += 40;
    if (mobile.viewport) score += 30;
    if (mobile.textReadability) score += 30;
    return score;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Mobile Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {(Object.keys(devices) as Array<keyof typeof devices>).map((device) => {
              const DeviceIcon = devices[device].icon;
              const score = getScoreForDevice(device);
              return (
                <Button
                  key={device}
                  variant={selectedDevice === device ? "default" : "outline"}
                  className={cn(
                    "flex-1 min-w-[100px] flex flex-col items-center gap-2 p-4",
                    selectedDevice === device && "border-primary"
                  )}
                  onClick={() => setSelectedDevice(device)}
                >
                  <DeviceIcon className="h-6 w-6" />
                  <div className="text-center">
                    <div className="text-sm font-medium capitalize">{device}</div>
                    <div className="text-xs text-muted-foreground">{score}%</div>
                  </div>
                </Button>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Responsive Design</span>
              <span className={`text-sm ${mobile.isMobileResponsive ? "text-green-500" : "text-red-500"}`}>
                {mobile.isMobileResponsive ? "Optimized" : "Needs Improvement"}
              </span>
            </div>
            <Progress value={mobile.isMobileResponsive ? 100 : 0} className="h-2" />
          </div>

          <Button
            variant="ghost"
            className="w-full flex items-center justify-between"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>Detailed Analysis</span>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>

          {isExpanded && (
            <div className="space-y-4 animate-in slide-in-from-top duration-300">
              <div className="grid gap-4 text-sm">
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span>Viewport Configuration</span>
                  <span className={mobile.viewport ? "text-green-500" : "text-red-500"}>
                    {mobile.viewport ? "✓" : "✗"}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span>Text Readability</span>
                  <span className={mobile.textReadability ? "text-green-500" : "text-red-500"}>
                    {mobile.textReadability ? "✓" : "✗"}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                  <span>Touch Targets</span>
                  <span className="text-yellow-500">Check Size</span>
                </div>
              </div>

              <div className="text-sm text-muted-foreground space-y-2 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium">Recommendations:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {!mobile.viewport && (
                    <li>Add proper viewport meta tag</li>
                  )}
                  {!mobile.textReadability && (
                    <li>Improve text size and contrast</li>
                  )}
                  <li>Ensure touch targets are at least 44x44px</li>
                  <li>Test navigation on various devices</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}