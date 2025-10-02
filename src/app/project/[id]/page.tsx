import { getProjectById } from "@/lib/projects";
import ProjectModal from "./ProjectModal";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

type ProjectPageParamsType = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: ProjectPageParamsType) {
  const { id } = await params;

  const project = getProjectById(id);
  if (!project) return notFound();

  const mdxSource = await serialize(project.description);
  return <ProjectModal project={{ ...project, descriptionMdx: mdxSource }} />;
}
