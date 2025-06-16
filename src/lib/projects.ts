// lib/projects.ts

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  liveUrl: string
  githubUrl: string
}

export const projectCategories = [
  "All",
  "Portfolio",
  "Dashboard",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

// --- Project Data ---
export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Next.js Portfolio",
    description:
      "My Personal Portfolio to Showcase My Skills and Projects, Built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    category: "Portfolio",
    liveUrl: "https://yusssuf-website.vercel.app/",
    githubUrl: "https://github.com/yusuf0786/website",
  },
  {
    id: "react-dashboard",
    title: "React Dashboard",
    description:
      "A React Dashboard Template, Built with React, Tailwind CSS, and Material UI.",
    image: "/react-dashboard.png",
    tags: ["React", "MUI", "SASS",],
    category: "Dashboard",
    liveUrl: "https://yusuf-dashboard-react.netlify.app/",
    githubUrl: "https://github.com/yusuf0786/dashboard-react",
  },
]

// --- Get Project by ID ---
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

// --- Get Projects by Category ---
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === "All") return projects
  return projects.filter((project) => project.category === category)
}
