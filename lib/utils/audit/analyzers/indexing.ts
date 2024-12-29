"use client";

import { IndexingAnalysis } from '@/lib/types/seo/indexing';

export async function analyzeIndexing(url: string): Promise<IndexingAnalysis> {
  const issues: string[] = [];
  const warnings: string[] = [];

  try {
    // Check robots.txt
    const robotsTxt = await checkRobotsTxt(url);
    
    // Check sitemap
    const sitemap = await checkSitemap(url);
    
    // Check canonical tags
    const canonical = await checkCanonicalTags(url);
    
    // Check meta robots
    const metaRobots = await checkMetaRobots(url);

    return {
      robotsTxt,
      sitemap,
      canonical,
      metaRobots,
      issues,
      warnings,
    };
  } catch (error) {
    issues.push(`Indexing analysis failed: ${error.message}`);
    return {
      robotsTxt: { exists: false, issues: [] },
      sitemap: { exists: false, urls: [] },
      canonical: { isValid: false, issues: [] },
      metaRobots: { isIndexable: false, directives: [] },
      issues,
      warnings,
    };
  }
}

async function checkRobotsTxt(url: string) {
  const robotsUrl = new URL('/robots.txt', url);
  try {
    const response = await fetch(robotsUrl);
    return {
      exists: response.ok,
      issues: response.ok ? [] : ['robots.txt not found'],
    };
  } catch {
    return {
      exists: false,
      issues: ['Failed to fetch robots.txt'],
    };
  }
}

async function checkSitemap(url: string) {
  const sitemapUrl = new URL('/sitemap.xml', url);
  try {
    const response = await fetch(sitemapUrl);
    return {
      exists: response.ok,
      urls: response.ok ? await extractSitemapUrls(await response.text()) : [],
    };
  } catch {
    return {
      exists: false,
      urls: [],
    };
  }
}

async function checkCanonicalTags(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const canonical = doc.querySelector('link[rel="canonical"]');
    
    return {
      isValid: !!canonical,
      issues: canonical ? [] : ['Missing canonical tag'],
    };
  } catch {
    return {
      isValid: false,
      issues: ['Failed to check canonical tags'],
    };
  }
}

async function checkMetaRobots(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const metaRobots = doc.querySelector('meta[name="robots"]');
    
    return {
      isIndexable: !metaRobots?.content?.includes('noindex'),
      directives: metaRobots?.content?.split(',').map(d => d.trim()) || [],
    };
  } catch {
    return {
      isIndexable: false,
      directives: [],
    };
  }
}

function extractSitemapUrls(xml: string): string[] {
  const urls: string[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const locations = doc.querySelectorAll('loc');
  locations.forEach(loc => urls.push(loc.textContent || ''));
  return urls;
}