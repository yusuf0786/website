"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectsByCategory } from "@/lib/projects";
import ProjectFilters from "@/components/project-filters";
import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectCategory } from "@/types";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const sectionRef = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [filteredProjects, setFilteredProjects] = useState(() =>
    getProjectsByCategory("All")
  );

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-background opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A curated selection of applications and platforms I&rsquo;ve engineered.
            Filter by category or click on any project to explore live demos and codebase details.
          </p>
        </div>

        <ProjectFilters
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              aria-label={`View details for ${project.title}`}
            >
              <Card className="h-full flex flex-col overflow-hidden border border-border/70 bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-background/90 text-foreground backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs border border-border/50">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all shrink-0"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-md">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No projects found in the &quot;{activeCategory}&quot; category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
