import { SEOMetaAnalysis } from '@/lib/types/seo/meta';
import { validateMetaTags } from '../validators/meta-validator';
import { MetaTagsConfig } from '@/lib/types/seo/config';

export function analyzeMetaTags(doc: Document): SEOMetaAnalysis {
  const title = extractTitle(doc);
  const description = extractDescription(doc);
  const openGraph = extractOpenGraph(doc);
  const twitter = extractTwitterCards(doc);

  const validation = validateMetaTags({ title, description, openGraph, twitter });

  return {
    ...validation,
    title,
    description,
    openGraph,
    twitter,
  };
}

function extractTitle(doc: Document) {
  const titleElement = doc.querySelector('title');
  const content = titleElement?.textContent || '';
  
  return {
    content,
    length: content.length,
    isOptimal: content.length >= 50 && content.length <= 60,
  };
}

function extractDescription(doc: Document) {
  const metaDescription = doc.querySelector('meta[name="description"]');
  const content = metaDescription?.getAttribute('content') || '';

  return {
    content,
    length: content.length,
    isOptimal: content.length >= 150 && content.length <= 160,
  };
}

function extractOpenGraph(doc: Document) {
  return {
    title: getMetaContent(doc, 'og:title'),
    description: getMetaContent(doc, 'og:description'),
    image: getMetaContent(doc, 'og:image'),
    type: getMetaContent(doc, 'og:type'),
  };
}

function extractTwitterCards(doc: Document) {
  return {
    card: getMetaContent(doc, 'twitter:card', 'name'),
    title: getMetaContent(doc, 'twitter:title', 'name'),
    description: getMetaContent(doc, 'twitter:description', 'name'),
    image: getMetaContent(doc, 'twitter:image', 'name'),
  };
}

function getMetaContent(doc: Document, property: string, attributeType: 'property' | 'name' = 'property'): string {
  return doc.querySelector(`meta[${attributeType}="${property}"]`)?.getAttribute('content') || '';
}