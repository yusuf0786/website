import Projects from "@/components/projects";
// import { notFound } from "next/navigation";

export default async function ProjectPage() {

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Projects/>
    </main>
  )
}
