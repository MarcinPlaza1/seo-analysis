"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data/blog-posts';

export function TagCloud() {
  const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))
    .map(tag => ({
      name: tag,
      count: blogPosts.filter(post => post.tags.includes(tag)).length
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag.name}
            variant="outline"
            className="hover:bg-primary/10 transition-colors cursor-pointer"
          >
            {tag.name} ({tag.count})
          </Badge>
        ))}
      </div>
    </Card>
  );
}