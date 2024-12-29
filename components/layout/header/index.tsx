```typescript
"use client";

import { useScroll } from '@/lib/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';

export function Header() {
  const scrolled = useScroll();

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled && "border-b shadow-sm"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center">
        <Logo />
        <MainNav className="mx-6 hidden md:flex" />
        <MobileNav className="md:hidden" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
```