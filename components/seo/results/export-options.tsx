"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download, FileText, Image, Table } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { SEOAnalysisResult } from "@/lib/types/seo";
import { generateBasicTemplate } from "@/lib/utils/export/templates";
import { generateDetailedTemplate } from "@/lib/utils/export/templates";
import html2canvas from "html2canvas";

interface ExportOptionsProps {
  results: SEOAnalysisResult;
  url: string;
}

export function ExportOptions({ results, url }: ExportOptionsProps) {
  const [exporting, setExporting] = useState(false);
  const { toast } = useToast();

  const handleExport = async (format: 'basic' | 'detailed' | 'image' | 'csv') => {
    try {
      setExporting(true);

      switch (format) {
        case 'basic':
          await exportBasicReport(results, url);
          break;
        case 'detailed':
          await exportDetailedReport(results, url);
          break;
        case 'image':
          await exportAsImage(results, url);
          break;
        case 'csv':
          await exportAsCSV(results, url);
          break;
      }

      toast({
        title: "Export successful",
        description: "Your report has been downloaded",
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: "There was an error exporting your report",
        variant: "destructive",
      });
    } finally {
      setExporting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button disabled={exporting}>
          <Download className="mr-2 h-4 w-4" />
          {exporting ? 'Exporting...' : 'Export Report'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleExport('basic')}>
          <FileText className="mr-2 h-4 w-4" />
          Basic Report
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('detailed')}>
          <FileText className="mr-2 h-4 w-4" />
          Detailed Report
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('image')}>
          <Image className="mr-2 h-4 w-4" />
          Export as Image
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('csv')}>
          <Table className="mr-2 h-4 w-4" />
          Export as CSV
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

async function exportBasicReport(results: SEOAnalysisResult, url: string) {
  const html = generateBasicTemplate(results, url);
  downloadHTML(html, 'basic-seo-report.html');
}

async function exportDetailedReport(results: SEOAnalysisResult, url: string) {
  const html = generateDetailedTemplate(results, url);
  downloadHTML(html, 'detailed-seo-report.html');
}

async function exportAsImage(results: SEOAnalysisResult, url: string) {
  const html = generateBasicTemplate(results, url);
  const container = document.createElement('div');
  container.innerHTML = html;
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  document.body.appendChild(container);

  const canvas = await html2canvas(container);
  document.body.removeChild(container);

  const link = document.createElement('a');
  link.download = `seo-report-${new Date().toISOString().split('T')[0]}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

async function exportAsCSV(results: SEOAnalysisResult, url: string) {
  const rows = [
    ['Metric', 'Value'],
    ['URL', url],
    ['Title Length', results.title.length.toString()],
    ['Description Length', results.description.length.toString()],
    ['Load Time', `${results.performance.loadTime}ms`],
    ['Mobile Friendly', results.mobile.isMobileResponsive ? 'Yes' : 'No'],
  ];

  const csvContent = rows.map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const link = document.createElement('a');
  link.download = `seo-report-${new Date().toISOString().split('T')[0]}.csv`;
  link.href = URL.createObjectURL(blob);
  link.click();
}

function downloadHTML(html: string, filename: string) {
  const blob = new Blob([html], { type: 'text/html' });
  const link = document.createElement('a');
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.click();
}