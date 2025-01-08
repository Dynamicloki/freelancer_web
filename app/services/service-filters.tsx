'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function ServiceFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search services..."
          className="pl-9"
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Category</Button>
        <Button variant="outline">Price Range</Button>
        <Button variant="outline">Sort By</Button>
      </div>
    </div>
  );
}