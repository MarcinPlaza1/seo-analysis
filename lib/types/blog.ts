export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  readTime: number;
  tags: string[];
}

export interface BlogCategory {
  name: string;
  count: number;
}

export interface BlogAuthor {
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}