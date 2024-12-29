```typescript
"use client";

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        <Search className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">SEO Master</span>
      </motion.div>
    </Link>
  );
}
```