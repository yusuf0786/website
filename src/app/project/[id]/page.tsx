import { getProjectById } from "@/lib/projects";
import ProjectModal from "./ProjectModal";
import { serialize } from "next-mdx-remote/serialize";

type ProjectPageParamsType = {
  params: Promise<{ id: string }>
};

export default async function ProjectPage({ params }: ProjectPageParamsType) {
  const { id: rawId } = await params;

  const id = typeof rawId === "string" ? rawId : Array.isArray(rawId) ? rawId[0] : undefined;
  if (!id) return <div>Project not found</div>;

  const project = getProjectById(id);
  if (!project) return <div>Project not found</div>;

  const mdxSource = await serialize(project.description);
  return <ProjectModal project={{ ...project, descriptionMdx: mdxSource }} />;
}
