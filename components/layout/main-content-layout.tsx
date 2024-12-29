"use client";

import { motion, AnimatePresence } from 'framer-motion';

interface MainContentLayoutProps {
  children: React.ReactNode;
}

export function MainContentLayout({ children }: MainContentLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}