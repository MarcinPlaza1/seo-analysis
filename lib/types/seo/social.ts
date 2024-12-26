export interface SocialAnalysis {
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    siteName: string;
  };
  twitter: {
    card: string;
    site: string;
    creator: string;
    title: string;
    description: string;
    image: string;
  };
  validation: {
    isValid: boolean;
    issues: string[];
  };
}