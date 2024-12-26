export interface MetaTagsAnalysis {
  title: {
    content: string;
    length: number;
    isOptimal: boolean;
    hasBrand: boolean;
  };
  description: {
    content: string;
    length: number;
    isOptimal: boolean;
    hasKeywords: boolean;
  };
  keywords: {
    list: string[];
    density: Record<string, number>;
    inTitle: string[];
    inDescription: string[];
  };
  canonical: {
    url: string;
    isValid: boolean;
  };
  robots: {
    content: string;
    isIndexable: boolean;
    isFollowable: boolean;
  };
}