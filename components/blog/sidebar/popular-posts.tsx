"use client";

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog-posts';

export function PopularPosts() {
  const popularPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Popular Posts</h3>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex gap-4">
              {post.coverImage && (
                <div className="w-16 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}