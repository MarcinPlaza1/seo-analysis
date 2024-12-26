import { SEOContentAnalysis } from '@/lib/types/seo/content';

export function analyzeContent(doc: Document): SEOContentAnalysis {
  return {
    headings: analyzeHeadings(doc),
    keywords: analyzeKeywords(doc),
    readability: analyzeReadability(doc),
  };
}

function analyzeHeadings(doc: Document) {
  return {
    h1Count: doc.querySelectorAll('h1').length,
    h2Count: doc.querySelectorAll('h2').length,
    h3Count: doc.querySelectorAll('h3').length,
    h4Count: doc.querySelectorAll('h4').length,
    h5Count: doc.querySelectorAll('h5').length,
    h6Count: doc.querySelectorAll('h6').length,
    structure: Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.tagName.toLowerCase()),
  };
}

function analyzeKeywords(doc: Document) {
  const text = doc.body.textContent || '';
  const words = text.toLowerCase().split(/\W+/);
  const wordCount = new Map();
  
  words.forEach(word => {
    if (word.length > 3) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
  });

  const topKeywords = Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, count]) => ({
      word,
      count,
      density: (count / words.length) * 100,
    }));

  return {
    density: Object.fromEntries(wordCount),
    topKeywords,
  };
}

function analyzeReadability(doc: Document) {
  const text = doc.body.textContent || '';
  const sentences = text.split(/[.!?]+/);
  const words = text.split(/\s+/);
  
  return {
    sentenceCount: sentences.length,
    wordCount: words.length,
    averageWordsPerSentence: words.length / sentences.length,
  };
}