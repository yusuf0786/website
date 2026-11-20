"use client";

import { Button } from "@/components/ui/button";
import { projectCategories } from "@/types";
import { ProjectFiltersProps } from "@/types";

export default function ProjectFilters({
  activeCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2 mb-12"
      role="group"
      aria-label="Filter projects by category"
    >
      {projectCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <Button
            key={category}
            variant={isActive ? "primary" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="rounded-full px-4 text-xs sm:text-sm font-medium transition-all duration-200"
            aria-pressed={isActive}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
}
