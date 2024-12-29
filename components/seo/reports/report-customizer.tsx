"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { defaultTemplate } from '@/lib/utils/reports/templates/default-template';
import { generateSEOReport } from '@/lib/utils/reports/generator';
import type { SEOAnalysisResult } from '@/lib/types/seo';

interface ReportCustomizerProps {
  results: SEOAnalysisResult;
  url: string;
}

export function ReportCustomizer({ results, url }: ReportCustomizerProps) {
  const [template, setTemplate] = useState(defaultTemplate);
  const [branding, setBranding] = useState({
    logo: '',
    primaryColor: '#000000',
    secondaryColor: '#666666',
  });

  const handleSectionToggle = (sectionId: string) => {
    setTemplate(prev => ({
      ...prev,
      sections: prev.sections.map(section => 
        section.id === sectionId 
          ? { ...section, enabled: !section.enabled }
          : section
      ),
    }));
  };

  const handleBrandingChange = (field: string, value: string) => {
    setBranding(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerateReport = async () => {
    try {
      const doc = await generateSEOReport(results, url, {
        template,
        branding,
        sections: template.sections
          .filter(section => section.enabled)
          .map(section => section.id),
      });
      
      doc.save(`seo-report-${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (error) {
      console.error('Failed to generate report:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customize Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Sections Selection */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Report Sections</h3>
            {template.sections.map(section => (
              <div key={section.id} className="flex items-center justify-between">
                <Label htmlFor={section.id}>{section.title}</Label>
                <Switch
                  id={section.id}
                  checked={section.enabled}
                  onCheckedChange={() => handleSectionToggle(section.id)}
                />
              </div>
            ))}
          </div>

          {/* Branding Options */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Branding</h3>
            <div className="space-y-2">
              <Label htmlFor="logo">Logo URL</Label>
              <Input
                id="logo"
                value={branding.logo}
                onChange={(e) => handleBrandingChange('logo', e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <Input
                  id="primaryColor"
                  type="color"
                  value={branding.primaryColor}
                  onChange={(e) => handleBrandingChange('primaryColor', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondaryColor">Secondary Color</Label>
                <Input
                  id="secondaryColor"
                  type="color"
                  value={branding.secondaryColor}
                  onChange={(e) => handleBrandingChange('secondaryColor', e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button 
            onClick={handleGenerateReport}
            className="w-full"
          >
            Generate Custom Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}