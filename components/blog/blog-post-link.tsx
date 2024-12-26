"use client";

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '@/lib/types/blog';
import { motion } from 'framer-motion';

interface BlogPostLinkProps {
  post: BlogPost;
  index: number;
}

export function BlogPostLink({ post, index }: BlogPostLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
          {post.coverImage && (
            <div className="aspect-video relative overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge>{post.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>
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
    </motion.div>
  );
}