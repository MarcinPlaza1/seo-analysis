"use client";

import { LinkAnalysis } from '@/lib/types/seo/link';

export function analyzeLinks(doc: Document, baseUrl: string): LinkAnalysis {
  const links = Array.from(doc.querySelectorAll('a[href]'));
  const baseHostname = new URL(baseUrl).hostname;

  const linkData = links.map(link => {
    const href = link.getAttribute('href') || '';
    let type: 'internal' | 'external' | 'anchor' = 'external';
    
    if (href.startsWith('#')) {
      type = 'anchor';
    } else if (href.startsWith('/') || href.includes(baseHostname)) {
      type = 'internal';
    }

    return {
      url: href,
      text: link.textContent || '',
      type,
      hasTitle: !!link.getAttribute('title'),
      isNofollow: link.getAttribute('rel')?.includes('nofollow') || false,
    };
  });

  const analysis = {
    total: links.length,
    internal: linkData.filter(l => l.type === 'internal').length,
    external: linkData.filter(l => l.type === 'external').length,
    anchor: linkData.filter(l => l.type === 'anchor').length,
    nofollow: linkData.filter(l => l.isNofollow).length,
    links: linkData,
    validation: validateLinks(linkData),
  };

  return analysis;
}

function validateLinks(links: Array<{ url: string; text: string; type: string; hasTitle: boolean }>) {
  const issues: string[] = [];
  const warnings: string[] = [];

  links.forEach(link => {
    if (!link.text.trim()) {
      issues.push(`Empty link text found for URL: ${link.url}`);
    }
    if (!link.hasTitle && link.type === 'external') {
      warnings.push(`External link missing title attribute: ${link.url}`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
    warnings,
  };
}