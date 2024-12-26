export interface LinkAnalysis {
  total: number;
  internal: number;
  external: number;
  anchor: number;
  nofollow: number;
  links: Array<{
    url: string;
    text: string;
    type: 'internal' | 'external' | 'anchor';
    hasTitle: boolean;
    isNofollow: boolean;
  }>;
  validation: {
    isValid: boolean;
    issues: string[];
    warnings: string[];
  };
}