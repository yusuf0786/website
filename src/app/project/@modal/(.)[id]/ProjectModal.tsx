"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github, Tag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MDXRemote } from "next-mdx-remote";
import { Project } from "@/types";

type ProjectModalProps = {
  project: Project;
};

export default function ProjectModal({ project }: ProjectModalProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) {
      dialog.showModal();
    }

    const handleClose = () => {
      if (!dialog.open) {
        router.back();
      }
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      router.back();
    };

    // Click on dialog backdrop dismisses modal per modern web guidance
    const handleBackdropClick = (e: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInDialog) {
        router.back();
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("click", handleBackdropClick);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("click", handleBackdropClick);
      if (dialog.open) {
        dialog.close();
      }
    };
  }, [router]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      className="m-auto rounded-2xl max-w-4xl w-[calc(100%-2rem)] max-h-[90vh] bg-card text-card-foreground p-0 border border-border/80 shadow-2xl overflow-hidden backdrop:bg-black/60 backdrop:backdrop-blur-xs overscroll-contain animate-in fade-in-0 duration-300 open:flex open:flex-col"
    >
      {/* Header bar with close button */}
      <div className="relative flex-1 overflow-y-auto scrollbar-custom p-6 sm:p-8">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 rounded-full bg-background/80 hover:bg-background shadow-xs border border-border/50 text-foreground"
          onClick={() => router.back()}
          aria-label="Close project modal"
        >
          <X size={18} />
        </Button>

        {/* Media Preview */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-muted mb-6 shadow-sm">
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton-bar" />
          )}
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-background/90 text-foreground backdrop-blur-xs text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-xs border border-border/50 flex items-center gap-1.5">
              <Tag size={13} className="text-primary" />
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <h2
          id="project-modal-title"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-4"
        >
          {project.title}
        </h2>

        <div className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 space-y-4">
          {project.descriptionMdx ? (
            <MDXRemote {...project.descriptionMdx} />
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-3">
            Technologies &amp; Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-foreground border border-border/40"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-6 bg-muted/40 border-t border-border/80 flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" className="flex-1 font-semibold gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <ExternalLink size={17} />
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="flex-1 font-semibold gap-2 border-border"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Github size={17} />
            Source Code
          </a>
        </Button>
      </div>
    </dialog>
  );
}
