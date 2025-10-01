// lib/projects.ts
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Project {
  id: string
  title: string
  description: string
  descriptionMdx?: MDXRemoteSerializeResult
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
  "Website",
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
    id: "todos-app",
    title: "Best Todos App",
    description:
      "Best Todos App, I wanted a todo app like this, I use it every day to write todos and keep track of them, Built with Next.js, TypeScript, Tailwind CSS, useReducer, and Context API.",
    image: "/best-todos-app-SS.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "useReducer", "Context API"],
    category: "Portfolio",
    liveUrl: "https://best-todos-app.vercel.app/",
    githubUrl: "https://github.com/yusuf0786/todo-context-usereducer-nextjs",
  },
  {
    id: "react-dashboard",
    title: "React Dashboard",
    description:
      "A React Dashboard Template, Built with React, Tailwind CSS, and Material UI.",
    image: "/react-dashboard.png",
    tags: ["React", "MUI", "SCSS",],
    category: "Dashboard",
    liveUrl: "https://yusuf-dashboard-react.netlify.app/",
    githubUrl: "https://github.com/yusuf0786/dashboard-react",
  },
  {
    id: "react-redux-todo",
    title: "React-Redux Todo",
    description:
      "Developed using <b>React</b> and <b>Redux</b>, this application manages state changes dynamically when tasks are added, edited, or deleted. It also utilizes <b>LocalStorage</b> to persist data locally on the user's device.",
    image: "/react-redux-todo-thumbnail.jpg",
    tags: ["React", "Redux", "SCSS",],
    category: "Todo",
    liveUrl: "https://yusuf-react-redux-todo.netlify.app/",
    githubUrl: "https://github.com/yusuf0786/react-redux-todo",
  },
  {
    id: "alchemy",
    title: "Alchemy",
    description:
      "This website was built using the Bootstrap 5 CSS framework, featuring a custom Bootstrap navigation bar and a Bootstrap carousel for enhanced UI and user experience.",
    image: "/Alchemy.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "JS & jQuery", "SCSS",],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/Alchemy/",
    githubUrl: "https://github.com/yusuf0786/Alchemy",
  },
  {
    id: "delight",
    title: "Delight",
    description:
      "The Delight features a unique <b>single page navigation</b>, where each section is linked through the header menu. It was developed using <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>Bootstrap 5</b>, and <b>CSS media queries</b> to ensure full responsiveness across all devices. A <b>slider.js plugin</b> was used, while the <b>Featured Products section</b> was implemented using custom <b>JavaScript</b>. Additionally, <b>Google Maps</b> integration is included.",
    image: "/delight.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "JS & jQuery", "Google Maps", "SCSS",],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/delight/",
    githubUrl: "https://github.com/yusuf0786/delight",
  },
  {
    id: "cascade",
    title: "Cascade",
    description:
      "This project was built using HTML, CSS Grid, JavaScript, and jQuery. The functionality to increase and decrease product quantities was implemented using JavaScript and jQuery.",
    image: "/Cascade.png",
    tags: ["HTML5", "CSS3 (Grid)", "JS & jQuery",],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/cascade-grid/",
    githubUrl: "https://github.com/yusuf0786/cascade-grid",
  },
  {
    id: "clothes-store",
    title: "Clothes Store",
    description:
      "This project was developed using <b>HTML</b> and <b>SCSS</b> only. It includes custom <b>variables</b>, <b>mixins</b>, and utilizes <b>partials</b> with <b>@import</b> for modular styling. Interactive effects such as the <b>hover animation on Featured Products</b> and the <b>slide effect in the Hero/Banner section</b> were achieved purely with <b>SCSS</b> and <b>CSS3 animations</b>, without the use of <b>JavaScript</b> or <b>jQuery</b>.",
    image: "/clothes-store.png",
    tags: ["HTML5", "CSS3", "SCSS",],
    category: "Website",
    liveUrl: "https://yusuf0786.github.io/clothes-store/",
    githubUrl: "https://github.com/yusuf0786/clothes-store",
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
