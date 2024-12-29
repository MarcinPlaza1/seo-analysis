import { SemanticAnalysis } from '@/lib/types/seo/semantic';

export function analyzeSemantics(doc: Document): SemanticAnalysis {
  return {
    structure: analyzeDocumentStructure(doc),
    semanticElements: analyzeSemanticElements(doc),
    validation: validateSemantics(doc),
  };
}

function analyzeDocumentStructure(doc: Document) {
  return {
    hasMain: !!doc.querySelector('main'),
    hasHeader: !!doc.querySelector('header'),
    hasFooter: !!doc.querySelector('footer'),
    hasNav: !!doc.querySelector('nav'),
    hasArticle: !!doc.querySelector('article'),
    hasAside: !!doc.querySelector('aside'),
    hasSection: !!doc.querySelector('section'),
  };
}

function analyzeSemanticElements(doc: Document) {
  return {
    mainCount: doc.querySelectorAll('main').length,
    headerCount: doc.querySelectorAll('header').length,
    footerCount: doc.querySelectorAll('footer').length,
    navCount: doc.querySelectorAll('nav').length,
    articleCount: doc.querySelectorAll('article').length,
    asideCount: doc.querySelectorAll('aside').length,
    sectionCount: doc.querySelectorAll('section').length,
  };
}

function validateSemantics(doc: Document) {
  const issues: string[] = [];
  
  if (doc.querySelectorAll('main').length > 1) {
    issues.push('Multiple <main> elements found (should have only one)');
  }
  
  if (!doc.querySelector('main')) {
    issues.push('Missing <main> element');
  }
  
  if (!doc.querySelector('header')) {
    issues.push('Missing <header> element');
  }
  
  if (!doc.querySelector('nav')) {
    issues.push('Missing <nav> element');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
  };
}