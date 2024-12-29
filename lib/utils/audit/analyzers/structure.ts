"use client";

import { SiteStructureAnalysis } from '@/lib/types/seo/structure';

export async function analyzeStructure(url: string): Promise<SiteStructureAnalysis> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    return {
      navigation: analyzeNavigation(doc),
      hierarchy: analyzeHierarchy(doc),
      breadcrumbs: analyzeBreadcrumbs(doc),
      internalLinks: analyzeInternalLinks(doc, url),
      validation: {
        isValid: true,
        issues: [],
        warnings: [],
      },
    };
  } catch (error) {
    return {
      navigation: { exists: false, items: [] },
      hierarchy: { levels: 0, structure: [] },
      breadcrumbs: { exists: false, path: [] },
      internalLinks: { count: 0, links: [] },
      validation: {
        isValid: false,
        issues: [`Structure analysis failed: ${error.message}`],
        warnings: [],
      },
    };
  }
}

function analyzeNavigation(doc: Document) {
  const nav = doc.querySelector('nav');
  const menuItems = Array.from(doc.querySelectorAll('nav a')).map(a => ({
    text: a.textContent || '',
    url: a.getAttribute('href') || '',
  }));

  return {
    exists: !!nav,
    items: menuItems,
  };
}

function analyzeHierarchy(doc: Document) {
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const structure = headings.map(h => ({
    level: parseInt(h.tagName[1]),
    text: h.textContent || '',
  }));

  return {
    levels: new Set(structure.map(h => h.level)).size,
    structure,
  };
}

function analyzeBreadcrumbs(doc: Document) {
  const breadcrumbs = doc.querySelector('[aria-label="breadcrumb"], .breadcrumbs');
  const items = Array.from(breadcrumbs?.querySelectorAll('a') || []).map(a => ({
    text: a.textContent || '',
    url: a.getAttribute('href') || '',
  }));

  return {
    exists: !!breadcrumbs,
    path: items,
  };
}

function analyzeInternalLinks(doc: Document, baseUrl: string) {
  const hostname = new URL(baseUrl).hostname;
  const links = Array.from(doc.querySelectorAll('a[href]'))
    .filter(a => {
      const href = a.getAttribute('href') || '';
      return href.startsWith('/') || href.includes(hostname);
    })
    .map(a => ({
      text: a.textContent || '',
      url: a.getAttribute('href') || '',
      isNavigation: !!a.closest('nav'),
    }));

  return {
    count: links.length,
    links,
  };
}