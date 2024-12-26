"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/types/blog';

interface BlogArticleProps {
  post: BlogPost;
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge>{post.category}</Badge>
          <span className="text-sm text-muted-foreground">
            {post.readTime} min read
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readTime} min read
          </div>
        </div>
      </div>

      {post.coverImage && (
        <div className="mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      )}

      <Card className="p-8">
        <div className="prose dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}