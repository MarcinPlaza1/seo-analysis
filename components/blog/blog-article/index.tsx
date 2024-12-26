"use client";

import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/types/blog';
import { ArticleHeader } from './article-header';
import { ArticleContent } from './article-content';
import { ArticleTags } from './article-tags';

interface BlogArticleProps {
  post: BlogPost;
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <ArticleHeader post={post} />
      
      {post.coverImage && (
        <div className="mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      )}

      <ArticleContent post={post} />
      <ArticleTags tags={post.tags} />
    </motion.article>
  );
}