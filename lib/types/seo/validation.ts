export interface ValidationResult {
  isValid: boolean;
  score: number;
  issues: string[];
  warnings: string[];
}

export interface MetaValidationResult extends ValidationResult {
  titleIssues?: string[];
  descriptionIssues?: string[];
  socialIssues?: string[];
}

export interface ContentValidationResult extends ValidationResult {
  readabilityIssues?: string[];
  keywordIssues?: string[];
  structureIssues?: string[];
}

export interface TechnicalValidationResult extends ValidationResult {
  performanceIssues?: string[];
  securityIssues?: string[];
  mobileIssues?: string[];
}