import Projects from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack, frontend, and web applications built by Yusuf Ansari.",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-8">
      <Projects />
    </main>
  );
}
