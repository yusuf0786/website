"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

type ProjectContentProps = {
  project: Project;
};

export default function ProjectContent({ project }: ProjectContentProps) {
  if (!project) return null;

  return (
    <article className="min-h-screen pt-24 pb-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/project">
              <ArrowLeft size={16} />
              Back to all projects
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-muted mb-8 border border-border/80">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
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

        {/* Title & Actions Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {project.title}
          </h1>

          <div className="flex items-center gap-3">
            <Button asChild className="gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2 border-border">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Code
              </a>
            </Button>
          </div>
        </div>

        {/* Description & MDX */}
        <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-base sm:text-lg mb-8 space-y-4">
          {project.descriptionMdx ? (
            <MDXRemote {...project.descriptionMdx} />
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        {/* Technologies Used */}
        <div className="rounded-xl border border-border/80 bg-card p-6">
          <h2 className="text-sm uppercase font-bold tracking-wider text-muted-foreground mb-4">
            Technologies &amp; Libraries Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-muted text-foreground border border-border/40"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
