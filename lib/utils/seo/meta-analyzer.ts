import { SEOMetaAnalysis } from '@/lib/types/seo/meta';

export function analyzeMetaTags(doc: Document): SEOMetaAnalysis {
  return {
    title: analyzeTitle(doc),
    description: analyzeDescription(doc),
    openGraph: analyzeOpenGraph(doc),
    twitter: analyzeTwitterCards(doc),
  };
}

function analyzeTitle(doc: Document) {
  const title = doc.querySelector('title')?.textContent || '';
  return {
    content: title,
    length: title.length,
    isOptimal: title.length >= 50 && title.length <= 60,
  };
}

function analyzeDescription(doc: Document) {
  const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  return {
    content: description,
    length: description.length,
    isOptimal: description.length >= 150 && description.length <= 160,
  };
}

function analyzeOpenGraph(doc: Document) {
  return {
    title: doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
    description: doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
    image: doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
    type: doc.querySelector('meta[property="og:type"]')?.getAttribute('content') || '',
  };
}

function analyzeTwitterCards(doc: Document) {
  return {
    card: doc.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '',
    title: doc.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '',
    description: doc.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || '',
    image: doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || '',
  };
}