"use client";

import { BlogPostLink } from './blog-post-link';
import { BlogPost } from '@/lib/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <BlogPostLink key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}