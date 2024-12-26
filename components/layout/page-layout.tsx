"use client";

import { Header } from './header';
import { MainFooter } from './main-footer';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title && (
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              {description && (
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </main>
      <MainFooter />
    </div>
  );
}