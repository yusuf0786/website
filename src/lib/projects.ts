import { Project, ProjectCategory, projectCategories } from "@/types";

export { projectCategories, type ProjectCategory };

// --- Project Data ---
export const projects: Project[] = [
  {
    id: "crm",
    title: "CRM Dashboard",
    description:
      "A full-stack CRM built with React.js, React Router & Axios on the frontend, and Node.js, Express.js, MongoDB & Mongoose on the backend. Features Recharts for data visualization, TanStack Table & Query for data caching, and Hello Pangea DnD for drag-and-drop pipeline management, with secure JWT authentication.",
    image: "/crm.png",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    category: "Dashboard/CRM",
    liveUrl: "https://crm-portfolio-project-mern.vercel.app/",
    githubUrl: "https://github.com/yusuf0786/crm-mern",
  },
  {
    id: "blog",
    title: "Full-Stack Blog Platform",
    description:
      "A comprehensive blog application built with Node.js, Express.js, EJS, MongoDB, and Mongoose supporting complete CRUD operations (Create, Read, Update, Delete) with responsive reader layouts.",
    image: "/blog.png",
    tags: ["Node.js", "Express.js", "EJS", "MongoDB", "Mongoose"],
    category: "Blog",
    liveUrl: "https://project-blogs.onrender.com/",
    githubUrl: "https://github.com/yusuf0786/project-blogs",
  },
  {
    id: "todos-app",
    title: "Next.js Productivity Todos App",
    description:
      "A modern task management application built with Next.js, TypeScript, Tailwind CSS, using React's useReducer and Context API for resilient, predictable client-side state handling.",
    image: "/best-todos-app-SS.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Context API"],
    category: "Web App",
    liveUrl: "https://best-todos-app.vercel.app/",
    githubUrl: "https://github.com/yusuf0786/todo-context-usereducer-nextjs",
  },
  {
    id: "react-dashboard",
    title: "React Analytics Dashboard",
    description:
      "An intuitive and responsive dashboard interface constructed with React, Tailwind CSS, Material UI, and modular SCSS styles.",
    image: "/react-dashboard.png",
    tags: ["React", "Material UI", "Tailwind CSS", "SCSS"],
    category: "Dashboard/CRM",
    liveUrl: "https://yusuf-dashboard-react.netlify.app/",
    githubUrl: "https://github.com/yusuf0786/dashboard-react",
  },
  {
    id: "react-redux-todo",
    title: "React-Redux Task Manager",
    description:
      "Task tracking web application built with React and Redux for centralized state management with LocalStorage persistence across user sessions.",
    image: "/react-redux-todo-thumbnail.jpg",
    tags: ["React", "Redux", "SCSS", "LocalStorage"],
    category: "Web App",
    liveUrl: "https://yusuf-react-redux-todo.netlify.app/",
    githubUrl: "https://github.com/yusuf0786/react-redux-todo",
  },
  {
    id: "alchemy",
    title: "Alchemy Corporate Website",
    description:
      "Modern marketing website built using Bootstrap 5 with responsive navigation, interactive media carousels, and optimized assets.",
    image: "/Alchemy.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/Alchemy/",
    githubUrl: "https://github.com/yusuf0786/Alchemy",
  },
  {
    id: "delight",
    title: "Delight Single-Page Experience",
    description:
      "Single-page responsive application with smooth section scrolling, custom JavaScript product showcase sliders, and Google Maps API integration.",
    image: "/delight.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Google Maps"],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/delight/",
    githubUrl: "https://github.com/yusuf0786/delight",
  },
  {
    id: "cascade",
    title: "Cascade E-Commerce Grid",
    description:
      "Responsive e-commerce product catalog implementing advanced CSS Grid layouts with dynamic cart quantity calculation.",
    image: "/Cascade.png",
    tags: ["HTML5", "CSS Grid", "JavaScript"],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/cascade-grid/",
    githubUrl: "https://github.com/yusuf0786/cascade-grid",
  },
  {
    id: "clothes-store",
    title: "Fashion Store Showcase",
    description:
      "High-performance fashion store landing page styled with clean SCSS architecture, CSS3 keyframe animations, and zero runtime JavaScript dependencies.",
    image: "/clothes-store.png",
    tags: ["HTML5", "CSS3 Animations", "SCSS"],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/clothes-store/",
    githubUrl: "https://github.com/yusuf0786/clothes-store",
  },
];

// --- Get Project by ID ---
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// --- Get Projects by Category ---
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
