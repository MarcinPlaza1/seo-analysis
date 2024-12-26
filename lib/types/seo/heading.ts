export interface HeadingAnalysis {
  structure: Array<{
    level: number;
    text: string;
    hasKeywords: boolean;
  }>;
  counts: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
  };
  validation: {
    isValid: boolean;
    issues: string[];
  };
  outline: string;
}