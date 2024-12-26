"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useDebounce } from '@/lib/hooks/use-debounce';

interface BlogSearchProps {
  onSearch?: (query: string) => void;
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (onSearch) {
      onSearch(debouncedQuery);
    }
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search articles..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-9"
      />
    </div>
  );
}