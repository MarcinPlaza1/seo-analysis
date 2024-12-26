"use client";

import { Badge } from '@/components/ui/badge';

interface ArticleTagsProps {
  tags: string[];
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-8">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline">
          {tag}
        </Badge>
      ))}
    </div>
  );
}