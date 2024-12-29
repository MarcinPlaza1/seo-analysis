"use client";

import { motion } from 'framer-motion';
import { PopularPosts } from './popular-posts';
import { TagCloud } from './tag-cloud';
import { NewsletterSignup } from './newsletter-signup';

export function BlogSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <PopularPosts />
      <TagCloud />
      <NewsletterSignup />
    </motion.aside>
  );
}