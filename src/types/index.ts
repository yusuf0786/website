import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ProjectCategory } from "@/lib/projects";

export type Project = {
  id: string;
  title: string;
  description: string;
  descriptionMdx?: MDXRemoteSerializeResult
  image: string;
  category: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export interface ProjectFiltersProps {
  activeCategory: ProjectCategory
  onCategoryChange: (category: ProjectCategory) => void
}