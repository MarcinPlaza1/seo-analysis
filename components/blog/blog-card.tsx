"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/types/blog';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video bg-muted relative overflow-hidden">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge>{post.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {post.readTime} min read
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
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
      </Card>
    </Link>
  );
}