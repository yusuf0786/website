import { Suspense } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import ScrollHandler from "@/components/ScrollHandler";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Contact />

      {/* Handles smooth query-based section scrolling on navigation */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
    </main>
  );
}
