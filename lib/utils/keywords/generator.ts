"use client";

interface KeywordSuggestion {
  keyword: string;
  relevance: number;
  searchVolume: number;
  difficulty: number;
}

export async function generateKeywordSuggestions(
  seed: string,
  options: {
    limit?: number;
    minSearchVolume?: number;
    maxDifficulty?: number;
  } = {}
): Promise<KeywordSuggestion[]> {
  const {
    limit = 10,
    minSearchVolume = 100,
    maxDifficulty = 70,
  } = options;

  // Get variations of the seed keyword
  const variations = generateVariations(seed);
  
  // Get related terms
  const related = await getRelatedTerms(seed);
  
  // Combine and filter suggestions
  const suggestions = [...variations, ...related]
    .filter(suggestion => 
      suggestion.searchVolume >= minSearchVolume &&
      suggestion.difficulty <= maxDifficulty
    )
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit);

  return suggestions;
}

function generateVariations(seed: string): KeywordSuggestion[] {
  const prefixes = ['best', 'top', 'how to', 'why', 'what is'];
  const suffixes = ['guide', 'tutorial', 'tips', 'examples', 'services'];
  
  const variations: KeywordSuggestion[] = [];
  
  // Add prefix variations
  prefixes.forEach(prefix => {
    variations.push({
      keyword: `${prefix} ${seed}`,
      relevance: 0.8,
      searchVolume: Math.floor(Math.random() * 1000) + 100,
      difficulty: Math.floor(Math.random() * 100),
    });
  });
  
  // Add suffix variations
  suffixes.forEach(suffix => {
    variations.push({
      keyword: `${seed} ${suffix}`,
      relevance: 0.7,
      searchVolume: Math.floor(Math.random() * 1000) + 100,
      difficulty: Math.floor(Math.random() * 100),
    });
  });
  
  return variations;
}

async function getRelatedTerms(seed: string): Promise<KeywordSuggestion[]> {
  // Simulate API call to get related terms
  // In production, integrate with a keyword research API
  return [
    {
      keyword: `${seed} alternatives`,
      relevance: 0.9,
      searchVolume: Math.floor(Math.random() * 1000) + 100,
      difficulty: Math.floor(Math.random() * 100),
    },
    {
      keyword: `${seed} vs`,
      relevance: 0.85,
      searchVolume: Math.floor(Math.random() * 1000) + 100,
      difficulty: Math.floor(Math.random() * 100),
    },
  ];
}