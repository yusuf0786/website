"use client";
// import Image from "next/image";

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
// import Projects from "@/components/projects";
// import RouteLoader from "@/components/RouteLoader";
import Skills from "@/components/skills";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("scrollTo");
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, [searchParams]);

  useEffect(() => {
      const node = mainRef.current
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // entry.target.classList.add("animate-fade-in")
            if (isInitialLoad) {
              setTimeout(() => {
                setIsInitialLoad(false)
              }, 1000)
            }
          }
        },
        { threshold: 0.1 },
      )
  
      if (node) {
        observer.observe(node)
      }
  
      return () => {
        if (node) {
          observer.unobserve(node)
        }
      }
    }, [isInitialLoad])

  return ( 
      <main ref={mainRef} className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <>
        <Hero />
        <About />
        <Skills />
        <Contact />
        </>
      </main>
  );
}
