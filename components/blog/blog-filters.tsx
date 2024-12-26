"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { useDebounce } from '@/lib/hooks/use-debounce';

interface BlogFiltersProps {
  categories: string[];
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string | null;
}

export function BlogFilters({
  categories,
  onSearch,
  onCategoryChange,
  selectedCategory,
}: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(debouncedSearch);
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange('')}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}