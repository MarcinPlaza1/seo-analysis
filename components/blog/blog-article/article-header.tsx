"use client";

import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/types/blog';

interface ArticleHeaderProps {
  post: BlogPost;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge>{post.category}</Badge>
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.readTime} min read
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {post.author}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}