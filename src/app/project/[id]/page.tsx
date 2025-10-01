import { getProjectById } from "@/lib/projects";
import ProjectModal from "./ProjectModal";
import { serialize } from "next-mdx-remote/serialize";

type ProjectPageProps = {
  params: { id: string | string[] }; // Next.js can pass string[] if route is catch-all
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const id = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : undefined;
  if (!id) return <div>Project not found</div>;

  const project = getProjectById(id);
  if (!project) return <div>Project not found</div>;

  const mdxSource = await serialize(project.description);

  return <ProjectModal project={{ ...project, descriptionMdx: mdxSource }} />;
}

