import { MDXRemoteSerializeResult } from "next-mdx-remote";

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