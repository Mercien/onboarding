"use client";

import { cn } from "@/lib/utils";

interface CaseFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FILTERS = [
  "All",
  "Fintech",
  "E-Commerce",
  "Food & Beverage",
  "SaaS / Tech",
  "Healthcare",
  "Logistics",
];

export function CaseFilters({ activeFilter, onFilterChange }: CaseFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-200",
            activeFilter === filter
              ? "bg-brand-blue-light/10 border-brand-blue-light text-brand-blue-light"
              : "border-white/7 text-muted hover:border-white/20 hover:text-white"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
