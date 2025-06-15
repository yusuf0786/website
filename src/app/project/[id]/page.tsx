"use client";

import { useParams } from "next/navigation";

import { getProjectById} from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectPage() {
  console.log("ProjectPage");
  
  const params = useParams();

  const id = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : undefined;
  const project = id ? getProjectById(id) : undefined;
  
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <ProjectModal project={project} />
    </div>
  );
}
