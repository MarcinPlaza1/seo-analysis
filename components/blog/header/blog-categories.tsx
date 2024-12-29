"use client";

import { Button } from '@/components/ui/button';
import { blogCategories } from '@/lib/data/blog-categories';

interface BlogCategoriesProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function BlogCategories({ selectedCategory, onCategoryChange }: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={!selectedCategory ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange?.('')}
      >
        All
      </Button>
      {blogCategories.map((category) => (
        <Button
          key={category.name}
          variant={selectedCategory === category.name ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange?.(category.name)}
        >
          {category.name} ({category.count})
        </Button>
      ))}
    </div>
  );
}