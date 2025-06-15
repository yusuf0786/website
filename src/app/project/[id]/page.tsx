import { getProjectById, projects } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id);
  if (!project) {
    return <div>Project not found.</div>;
  }
  return (
    <div>
      <ProjectModal project={project} />
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    params: { id: project.id },
  }));
}
