"use client";

import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted';
}

export function SectionContainer({ 
  children, 
  className,
  background = 'default' 
}: SectionContainerProps) {
  return (
    <section 
      className={cn(
        'py-16',
        background === 'muted' && 'bg-muted/50',
        background === 'default' && 'bg-background',
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}