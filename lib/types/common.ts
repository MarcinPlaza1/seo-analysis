export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithClassName {
  className?: string;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: Status;
}

export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  items: NavigationItem[];
}