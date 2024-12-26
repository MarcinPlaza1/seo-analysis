export interface WebsiteAudit {
  url: string;
  timestamp: string;
  technical: TechnicalSEOAnalysis;
  indexing: IndexingAnalysis;
  structure: SiteStructureAnalysis;
  validation: {
    isValid: boolean;
    issues: string[];
    warnings: string[];
  };
  score: number;
}

export interface IndexingAnalysis {
  robotsTxt: {
    exists: boolean;
    issues: string[];
  };
  sitemap: {
    exists: boolean;
    urls: string[];
  };
  canonical: {
    isValid: boolean;
    issues: string[];
  };
  metaRobots: {
    isIndexable: boolean;
    directives: string[];
  };
  issues: string[];
  warnings: string[];
}

export interface SiteStructureAnalysis {
  navigation: {
    exists: boolean;
    items: Array<{ text: string; url: string }>;
  };
  hierarchy: {
    levels: number;
    structure: Array<{ level: number; text: string }>;
  };
  breadcrumbs: {
    exists: boolean;
    path: Array<{ text: string; url: string }>;
  };
  internalLinks: {
    count: number;
    links: Array<{
      text: string;
      url: string;
      isNavigation: boolean;
    }>;
  };
  validation: {
    isValid: boolean;
    issues: string[];
    warnings: string[];
  };
}