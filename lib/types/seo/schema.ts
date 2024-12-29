export interface SchemaAnalysis {
  hasSchema: boolean;
  types: string[];
  validation: Array<{
    type: string;
    isValid: boolean;
    errors: string[];
  }>;
}