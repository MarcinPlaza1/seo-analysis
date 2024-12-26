```typescript
"use client";

import { cn } from '@/lib/utils';
import { navigationItems } from './navigation-items';
import { NavItem } from './navigation/nav-item';
import { NavMenu } from './navigation/nav-menu';

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {navigationItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
        />
      ))}
      <NavMenu />
    </nav>
  );
}
```