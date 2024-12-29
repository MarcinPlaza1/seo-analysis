"use client";

import { Header } from './header';
import { MainFooter } from './main-footer';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  animate?: boolean;
}

export function PageContainer({
  children,
  title,
  description,
  className,
  animate = true,
}: PageContainerProps) {
  const content = (
    <div className={cn("min-h-screen bg-background", className)}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {(title || description) && (
          <div className="text-center mb-8">
            {title && (
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
            )}
            {description && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </main>
      <MainFooter />
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.div>
  );
}