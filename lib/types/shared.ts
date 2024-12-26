export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: Status;
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface BasePageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithClassName {
  className?: string;
}