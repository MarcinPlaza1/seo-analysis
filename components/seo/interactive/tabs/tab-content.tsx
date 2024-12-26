"use client";

import { motion } from "framer-motion";

interface TabContentProps {
  children: React.ReactNode;
}

export function TabContent({ children }: TabContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}