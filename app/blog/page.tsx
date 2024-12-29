"use client";

import { useState } from 'react';
import { PageLayout } from '@/components/layout/page-layout';
import { BlogGrid } from '@/components/blog/blog-grid';
import { BlogFilters } from '@/components/blog/blog-filters';
import { blogPosts } from '@/lib/data/blog-posts';

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout 
      title="Blog" 
      description="Latest insights and tips about SEO and digital marketing"
    >
      <BlogFilters
        categories={categories}
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <BlogGrid posts={filteredPosts} />
    </PageLayout>
  );
}