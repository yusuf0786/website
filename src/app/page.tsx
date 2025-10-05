"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import { Suspense, useEffect, useRef, useState } from "react";
import ScrollHandler from "@/components/ScrollHandler";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const node = mainRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isInitialLoad) {
          setTimeout(() => setIsInitialLoad(false), 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [isInitialLoad]);

  return (
    <main ref={mainRef} className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <About />
      <Skills />
      <Contact />

      {/* Suspense wrapper around searchParams usage */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
    </main>
  );
}
