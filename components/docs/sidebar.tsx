"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { docsConfig } from '@/lib/config/docs';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-auto pb-10">
      <nav className="space-y-6">
        {docsConfig.sidebarNav.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-sm text-muted-foreground hover:text-primary",
                      pathname === item.href && "text-primary font-medium"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}