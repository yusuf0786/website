import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import { Suspense } from "react";
import ScrollHandler from "@/components/ScrollHandler";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
