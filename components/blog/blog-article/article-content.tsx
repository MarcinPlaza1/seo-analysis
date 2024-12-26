"use client";

import { Card } from '@/components/ui/card';
import { BlogPost } from '@/lib/types/blog';

interface ArticleContentProps {
  post: BlogPost;
}

export function ArticleContent({ post }: ArticleContentProps) {
  return (
    <Card className="p-8">
      <div className="prose dark:prose-invert max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)[0].length;
            const text = paragraph.replace(/^#+\s/, '');
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            return <HeadingTag key={index}>{text}</HeadingTag>;
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </Card>
  );
}