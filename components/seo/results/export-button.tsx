"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { SEOAnalysisResult } from "@/lib/types/seo";
import { generateHTMLReport } from "@/lib/utils/export/html-report";
import html2canvas from "html2canvas";

interface ExportButtonProps {
  results: SEOAnalysisResult;
  url: string;
}

export function ExportButton({ results, url }: ExportButtonProps) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    try {
      setExporting(true);
      
      // Generate HTML report
      const htmlContent = generateHTMLReport(results, url);
      
      // Create a temporary container
      const container = document.createElement('div');
      container.innerHTML = htmlContent;
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      document.body.appendChild(container);
      
      // Convert to image
      const canvas = await html2canvas(container);
      document.body.removeChild(container);
      
      // Create download link
      const link = document.createElement('a');
      link.download = `seo-report-${new Date().toISOString().split('T')[0]}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setExporting(false);
    }
  };

  return (
    <Button 
      onClick={handleExport}
      disabled={exporting}
    >
      <Download className="mr-2 h-4 w-4" />
      {exporting ? 'Exporting...' : 'Export Report'}
    </Button>
  );
}