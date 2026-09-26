import Projects from "@/components/projects";
// import { notFound } from "next/navigation";

export default async function ProjectPage() {

  return (
    <main className="min-h-screen bg-(--background)">
      <Projects/>
    </main>
  )
}
