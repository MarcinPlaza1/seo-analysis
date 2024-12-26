export interface SemanticAnalysis {
  structure: {
    hasMain: boolean;
    hasHeader: boolean;
    hasFooter: boolean;
    hasNav: boolean;
    hasArticle: boolean;
    hasAside: boolean;
    hasSection: boolean;
  };
  semanticElements: {
    mainCount: number;
    headerCount: number;
    footerCount: number;
    navCount: number;
    articleCount: number;
    asideCount: number;
    sectionCount: number;
  };
  validation: {
    isValid: boolean;
    issues: string[];
  };
}