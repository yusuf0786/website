"use client"

import { Button } from "@/components/ui/button"
import { projectCategories } from "@/lib/projects"
import { ProjectFiltersProps } from "@/types" 

export default function ProjectFilters({ activeCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {projectCategories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "fillBtnActive" : "fillBtn"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-300`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
