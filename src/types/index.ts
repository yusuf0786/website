import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export const projectCategories = [
  "All",
  "Dashboard/CRM",
  "Website",
  "Web App",
  "Blog",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  description: string;
  descriptionMdx?: MDXRemoteSerializeResult;
  image: string;
  category: ProjectCategory | string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export interface ProjectFiltersProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}
