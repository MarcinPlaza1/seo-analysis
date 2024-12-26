"use client";

import { useParams } from 'next/navigation';
import { PageLayout } from '@/components/layout/page-layout';
import { BlogArticle } from '@/components/blog/blog-article';
import { blogPosts } from '@/lib/data/blog-posts';
import { notFound } from 'next/navigation';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <BlogArticle post={post} />
    </PageLayout>
  );
}