import { SocialAnalysis } from '@/lib/types/seo/social';

export function analyzeSocialTags(doc: Document): SocialAnalysis {
  return {
    openGraph: analyzeOpenGraph(doc),
    twitter: analyzeTwitterCards(doc),
    validation: validateSocialTags(doc),
  };
}

function analyzeOpenGraph(doc: Document) {
  return {
    title: getMetaContent(doc, 'og:title'),
    description: getMetaContent(doc, 'og:description'),
    image: getMetaContent(doc, 'og:image'),
    url: getMetaContent(doc, 'og:url'),
    type: getMetaContent(doc, 'og:type'),
    siteName: getMetaContent(doc, 'og:site_name'),
  };
}

function analyzeTwitterCards(doc: Document) {
  return {
    card: getMetaContent(doc, 'twitter:card', 'name'),
    site: getMetaContent(doc, 'twitter:site', 'name'),
    creator: getMetaContent(doc, 'twitter:creator', 'name'),
    title: getMetaContent(doc, 'twitter:title', 'name'),
    description: getMetaContent(doc, 'twitter:description', 'name'),
    image: getMetaContent(doc, 'twitter:image', 'name'),
  };
}

function validateSocialTags(doc: Document) {
  const issues: string[] = [];
  
  // Open Graph validation
  if (!getMetaContent(doc, 'og:title')) issues.push('Missing og:title');
  if (!getMetaContent(doc, 'og:description')) issues.push('Missing og:description');
  if (!getMetaContent(doc, 'og:image')) issues.push('Missing og:image');
  
  // Twitter Card validation
  if (!getMetaContent(doc, 'twitter:card', 'name')) issues.push('Missing twitter:card');
  if (!getMetaContent(doc, 'twitter:title', 'name')) issues.push('Missing twitter:title');
  if (!getMetaContent(doc, 'twitter:description', 'name')) issues.push('Missing twitter:description');
  
  return {
    isValid: issues.length === 0,
    issues,
  };
}

function getMetaContent(doc: Document, property: string, attributeType: 'property' | 'name' = 'property'): string {
  return doc.querySelector(`meta[${attributeType}="${property}"]`)?.getAttribute('content') || '';
}