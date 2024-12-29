export interface MetaTagsConfig {
  title: {
    content: string;
    length: number;
    isOptimal: boolean;
  };
  description: {
    content: string;
    length: number;
    isOptimal: boolean;
  };
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
}

export interface SEOConfig {
  meta: MetaTagsConfig;
  content: ContentConfig;
  technical: TechnicalConfig;
}

export interface ContentConfig {
  minWordsPerPage: number;
  maxWordsPerSentence: number;
  keywordDensityRange: {
    min: number;
    max: number;
  };
}

export interface TechnicalConfig {
  performance: {
    maxLoadTime: number;
    maxTTFB: number;
    minSpeedScore: number;
  };
  security: {
    requireHTTPS: boolean;
    requireHSTS: boolean;
    allowMixedContent: boolean;
  };
  mobile: {
    requireResponsive: boolean;
    minTouchTargetSize: number;
    requireViewport: boolean;
  };
}