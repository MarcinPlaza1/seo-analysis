"use client";

import { WebsiteAudit } from '@/lib/types/seo/audit';
import { analyzeTechnicalSEO } from './analyzers/technical';
import { analyzeIndexing } from './analyzers/indexing';
import { analyzeStructure } from './analyzers/structure';
import { validateAuditResults } from './validators/audit-validator';

export async function performWebsiteAudit(url: string): Promise<WebsiteAudit> {
  try {
    // Perform technical SEO analysis
    const technical = await analyzeTechnicalSEO(url);
    
    // Check indexing status
    const indexing = await analyzeIndexing(url);
    
    // Analyze site structure
    const structure = await analyzeStructure(url);
    
    // Validate results
    const validation = validateAuditResults({ technical, indexing, structure });
    
    return {
      url,
      timestamp: new Date().toISOString(),
      technical,
      indexing,
      structure,
      validation,
      score: calculateAuditScore({ technical, indexing, structure }),
    };
  } catch (error) {
    throw new Error(`Audit failed: ${error.message}`);
  }
}