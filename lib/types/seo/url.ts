export interface URLAnalysis {
  protocol: string;
  hostname: string;
  path: {
    full: string;
    segments: string[];
    depth: number;
  };
  query: {
    params: Record<string, string>;
    count: number;
  };
  validation: {
    isValid: boolean;
    issues: string[];
  };
}