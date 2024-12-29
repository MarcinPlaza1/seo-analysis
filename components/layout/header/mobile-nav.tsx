```typescript
"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { navigationItems, resourceLinks } from './navigation-items';
import { cn } from '@/lib/utils';
import { MobileNavItem } from './navigation/mobile-nav-item';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] pr-0">
          <motion.nav
            className="flex flex-col space-y-4 mt-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navigationItems.map((item) => (
              <MobileNavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                onClick={() => setOpen(false)}
              />
            ))}

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="resources">
                <AccordionTrigger className="text-sm font-medium px-4">
                  Resources
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    {resourceLinks.map((resource) => (
                      <MobileNavItem
                        key={resource.href}
                        href={resource.href}
                        label={resource.label}
                        onClick={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
```