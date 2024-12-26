"use client";

import { motion } from 'framer-motion';
import { BlogSidebar } from './sidebar/blog-sidebar';
import { BlogHeader } from './header/blog-header';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHeader />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
        <BlogSidebar />
      </div>
    </div>
  );
}