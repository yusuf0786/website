"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { getProjectsByCategory, type ProjectCategory } from "@/lib/projects"
import ProjectFilters from "@/components/project-filters"
// import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Projects({ clicked, setClicked }: { clicked: boolean, setClicked: React.Dispatch<React.SetStateAction<boolean>> }) {
  const sectionRef = useRef<HTMLElement>(null)
  // const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [filteredProjects, setFilteredProjects] = useState(getProjectsByCategory("All"))

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => {
        setClicked(false);
      }, 1000); // hide loader after short time or once new route mounts
      return () => clearTimeout(timeout);
    }
  }, [clicked, setClicked]);

  useEffect(() => {
    const node = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [])

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category)
    setFilteredProjects(getProjectsByCategory(category))
  }

  // const handleProjectClick = (projectId: string, e: React.MouseEvent) => {
  //   e.preventDefault()
  //   router.push(`/project/${projectId}`)
  // }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-[#fdfdfd80]">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Filter by category or click on any project to view more details.
          </p>
        </div>

        <ProjectFilters activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link onClick={handleClick} key={project.id} href={`/project/${project.id}`} style={{ animationDelay: `${index * 100}ms`, }}>
              <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <Image
                    width={100}
                    height={100}
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto min-h-[200px] max-h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                      // fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute top-3 right-3 bg-cyan-100 text-cyan-500 dark:bg-teal-500 dark:text-white border dark:border-teal-500 rounded">
                      <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors dark:text-[#fdfdfd80]">{project.title}</h3>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded dark:text-[#fdfdfd80]">
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            // <div
            //   key={project.id}
            //   onClick={(e) => handleProjectClick(project.id, e)}
            //   className="cursor-pointer"
            //   style={{
            //     animationDelay: `${index * 100}ms`,
            //   }}
            // >
              
            //   </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in the &quot;{activeCategory}&quot; category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
