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
  "Web Development",
  "E-commerce",
  "Mobile App",
  "Dashboard",
  "Social Media",
  "Education",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

// --- Project Data ---
export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, payment processing with Stripe, user authentication, order management, and an admin dashboard.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    category: "E-commerce",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills, built with modern web technologies like Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with real-time collaboration, file attachments, and analytics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    category: "Dashboard",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/task-manager",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "An app showing weather forecasts, alerts, and maps with integration of various weather APIs and Chart.js.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "API Integration", "Chart.js", "Mapbox", "TypeScript"],
    category: "Dashboard",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather-dashboard",
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description:
      "A scalable social media platform with real-time chat, media uploads, notifications, and advanced privacy settings.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Socket.io", "MongoDB", "Cloudinary", "Redis"],
    category: "Social Media",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/social-app",
  },
  {
    id: "learning-platform",
    title: "Learning Platform",
    description:
      "An online LMS with course creation, quizzes, video streaming, and payment integration using Stripe.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Video.js", "Stripe", "PostgreSQL", "AWS S3"],
    category: "Education",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/learning-platform",
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    description:
      "A secure mobile banking app with authentication, money transfers, bill payments, and financial analytics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "JWT"],
    category: "Mobile App",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/banking-app",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description:
      "Modern website for a restaurant with a menu, reservation system, and online ordering integrated with Stripe.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/restaurant-site",
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
