"use client";

import { motion } from 'framer-motion';
import { BlogSearch } from './blog-search';
import { BlogCategories } from './blog-categories';

export function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-muted-foreground mb-6">
        Latest insights and tips about SEO and digital marketing
      </p>
      <div className="space-y-4">
        <BlogSearch />
        <BlogCategories />
      </div>
    </motion.div>
  );
}