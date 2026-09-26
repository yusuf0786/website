"use client"

import { Button } from "@/components/ui/button"
import { projectCategories, type ProjectCategory } from "@/lib/projects"

interface ProjectFiltersProps {
  activeCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
}

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
