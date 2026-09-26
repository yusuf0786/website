"use client";

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ExternalLink, Github, Tag } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MDXRemote } from "next-mdx-remote";
import ProjectModalSkeleton from "@/components/ProjectModalSkeleton";
import { Project } from "@/types";

let hasFirstOpened = false;

type ProjectModalProps = {
  project: Project;
};

export default function ProjectModal({ project }: ProjectModalProps) {
  const isFirstOpen = !hasFirstOpened;
  if (isFirstOpen) hasFirstOpened = true;
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const [imageLoaded, setImageLoaded] = useState(false);
  const [minElapsed, setMinElapsed] = useState(false);
  const [hideSkeleton, setHideSkeleton] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  // Minimum load timer: 3ms only on very first open ever
  useEffect(() => {
    if (isFirstOpen) {
      const timer = setTimeout(() => setMinElapsed(true), 3);
      return () => clearTimeout(timer);
    } else {
      setMinElapsed(true);
    }
  }, [isFirstOpen]);

  // When content is ready: hide skeleton instantly and trigger smooth flash.
  useEffect(() => {
    if (minElapsed && imageLoaded && !hideSkeleton) {
      setHideSkeleton(true);
      setShowFlash(true);
      const timer = setTimeout(() => setShowFlash(false), 800);
      return () => clearTimeout(timer);
    }
  }, [minElapsed, imageLoaded, hideSkeleton]);

  const showSkeleton = !hideSkeleton;

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-500">
      <Card
          ref={modalRef}
          className="w-full max-w-4xl max-h-[90vh] overflow-hidden m-4 animate-in fade-in-0 duration-500 shadow-2xl flex flex-col relative bg-background scrollbar-custom"
        >
        <CardContent className="p-2 md:p-4 flex-1 overflow-y-auto" ref={scrollContainerRef}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-5 z-10 shadow-lg"
            onClick={() => router.back()}
          >
            <X size={20} />
          </Button>
          <div className="relative text-foreground">

            <div className="aspect-video overflow-hidden rounded-t-lg relative transition-[transform, opacity, height] duration-500 ease-in-out translate-x-0 mb-3 rounded">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                fill
                onLoad={() => setImageLoaded(true)}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority // load early
                // loading="lazy" // dealay loading image itself
                // decoding="async" // decode already loaded image asyncly
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#ffffff99] dark:bg-[#00000099] text-black dark:text-white shadow-lg text-sm font-medium px-3 py-1 rounded flex items-center gap-1">
                  <Tag size={14} />
                  {project.category}
                </span>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <div className="mb-4 leading-relaxed">
              {project.descriptionMdx ? (
                <MDXRemote {...project.descriptionMdx} />
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-sm font-medium bg-[#ffffff99] dark:bg-[#00000099] text-primary shadow px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Sticky footer with Live Demo & GitHub links */}
        <div className="sticky bottom-0 bg-(--background) border-t border-gray-200 dark:border-gray-700 p-4">
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
            <Button asChild variant="primary" className="flex-1 border">
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
      </Card>
      
      {showSkeleton && (
        <div className="absolute inset-0 z-[60] pointer-events-none">
          <ProjectModalSkeleton />
        </div>
      )}

      {/* Flash appears when skeleton hides, fades smoothly */}
      {showFlash && (
        <div className="absolute inset-0 z-[70] bg-white dark:bg-[#110011] animate-flash pointer-events-none" />
      )}

    </div>
  )
}
