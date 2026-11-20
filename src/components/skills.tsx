"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Code2, Server, Wrench, Sparkles } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ESNext)",
      "Tailwind CSS v4",
      "HTML5 / Semantic Web",
      "CSS3 / SCSS",
      "Redux / Context API",
      "Responsive Layouts",
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "Mongoose",
      "EJS",
      "JWT Authentication",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Next-MDX",
      "Vercel",
      "ESLint",
      "Lighthouse Auditing",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Modern & Agentic Practices",
    icon: Sparkles,
    skills: [
      "Agentic AI Development",
      "Core Web Vitals Optimization",
      "Modern Web Platform Standards",
      "Design Systems & Shadcn",
      "Problem Solving",
      "Collaborative Delivery",
    ],
  },
];

export default function Skills() {
  const sectionRef = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-background opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Technical Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive overview of technologies, frameworks, and methodologies I leverage to build robust web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border/80 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/60 hover:bg-primary/10 hover:text-primary text-foreground border border-border/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
