"use client";

import { User, Mail, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const EXPERIENCES = [
  {
    title: "UI/UX Developer",
    company: "Convergence IT Services PVT. LTD.",
    period: "Recent",
    description:
      "Developed and maintained responsive web applications, creating modular templates and component extensions with a focus on cross-browser accessibility and performance optimization.",
  },
  {
    title: "Front-End Developer",
    company: "Octapro Solutions PVT. LTD.",
    period: "2024 - 2025",
    description:
      "Engineered an enterprise CRM frontend with dynamic attendance tracking, REST API integrations, interactive data visualization via ApexCharts, and mobile-optimized offcanvas workflows.",
  },
  {
    title: "UI Developer",
    company: "InCruiter India PVT. LTD.",
    period: "2024",
    description:
      "Built custom, accessible digital web portals and responsive themes with strict adherence to cross-device compatibility, modern CSS layout standards, and SEO best practices.",
  },
  {
    title: "Front-End Developer",
    company: "PaperPlane Design Solutions PVT. LTD.",
    period: "2022 - 2023",
    description:
      "Delivered pixel-perfect user interfaces from Figma design specifications using React, modern JavaScript, CSS animation pipelines, and Lighthouse performance auditing.",
  },
  {
    title: "Web Developer Intern",
    company: "Zobble Solutions PVT. LTD.",
    period: "2021",
    description:
      "Built interactive web interfaces from scratch focusing on clean DOM structure, accessible semantic markup, responsive layouts, and cross-browser bug resolution.",
  },
];

export default function About() {
  const sectionRef = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-muted/20 opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 flex justify-center h-full">
            <div className="relative w-full h-auto rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <Image
                src="/yusuf-HTT2411YA027.jpg"
                alt="Yusuf Ansari - Front-End Web Developer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Passionate Front-End Web Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
              Hi! I&rsquo;m a Front-End Web Developer with over 4 years of experience
              architecting responsive, performant, and user-friendly web applications.
              I specialize in HTML5, CSS3, modern JavaScript/TypeScript, React.js, and
              Next.js, crafting scalable component architectures with Tailwind CSS.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
              My engineering philosophy centers on clean code, progressive enhancement,
              accessible UX, and staying on the frontier of modern web platform standards
              and agentic AI-assisted development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border border-border/80 bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <User size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="text-sm font-semibold truncate text-foreground">Yusuf Ansari</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/80 bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href="mailto:webdev.yusufansari@gmail.com"
                      className="text-sm font-semibold truncate text-foreground hover:text-primary transition-colors block"
                    >
                      webdev.yusufansari@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/80 bg-card hover:border-primary/40 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold truncate text-foreground">Mumbai, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <Briefcase size={22} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-10">
            {EXPERIENCES.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background bg-primary group-hover:scale-125 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mb-2">{item.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
