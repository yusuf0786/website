import { getProjectById } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const project = await getProjectById(params.id);
  if (!project) {
    return <div>Project not found.</div>;
  }
 return (
    <div>
      <ProjectModal project={project} />
    </div>
 )
  
}
