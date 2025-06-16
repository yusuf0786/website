"use client";

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ExternalLink, Github, Tag } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation";
// ... rest of imports ...

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

type ProjectModalProps = {
  project: Project;
};

export default function ProjectModal({ project }: ProjectModalProps) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        router.back()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [router])

  if (!project) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300">
      <Card
        ref={modalRef}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4 animate-in zoom-in-95 duration-300"
      >
        <CardContent className="p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white shadow-lg cursor-pointer"
              onClick={() => router.back()}
            >
              <X size={20} />
            </Button>

            <div className="aspect-video overflow-hidden rounded-t-lg relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-primary-foreground text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={14} />
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-(--background) dark:bg-(--background-dark) text-[#0f0f0f] dark:text-[#f0f0f0]">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            <p className="mb-6 leading-relaxed ">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild className="flex-1 border">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-(--background-dark) dark:bg-(--background) text-[#0f0f0f] text-[#f0f0f0] dark:text-[#0f0f0f]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
