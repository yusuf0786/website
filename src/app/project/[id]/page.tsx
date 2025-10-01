import { getProjectById } from "@/lib/projects";
import ProjectModal from "./ProjectModal";
import { serialize } from "next-mdx-remote/serialize";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = getProjectById(id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  const mdxSource = await serialize(project.description);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProjectModal project={{ ...project, descriptionMdx: mdxSource }} />
    </div>
  );
}
