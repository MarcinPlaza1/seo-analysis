import { validateUrl } from './security/url-validator';
import { sanitizeMetadata } from './security/sanitizer';
import { validateContentSecurity } from './security/content-security';
import { analyzeMetaTags } from './seo/meta-analyzer';
import { analyzeContent } from './seo/content-analyzer';
import { analyzeTechnical } from './seo/technical-analyzer';
import type { SEOAnalysisResult } from '../types/seo';

export async function analyzePage(url: string): Promise<SEOAnalysisResult> {
  // Validate URL
  const urlValidation = validateUrl(url);
  if (!urlValidation.isValid) {
    throw new Error(urlValidation.error || 'Invalid URL');
  }

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Validate content security
    const securityCheck = validateContentSecurity(html);
    if (!securityCheck.isSafe) {
      throw new Error('Content security check failed: ' + securityCheck.issues.join(', '));
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const metaAnalysis = analyzeMetaTags(doc);
    const contentAnalysis = analyzeContent(doc);
    const technicalAnalysis = analyzeTechnical(doc, url);

    // Sanitize results
    return sanitizeMetadata({
      meta: metaAnalysis,
      content: contentAnalysis,
      technical: technicalAnalysis,
    });
  } catch (error) {
    throw new Error(`Failed to analyze page: ${error.message}`);
  }
}