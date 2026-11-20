"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/banner-bg-mobile.png" />
        <source srcSet="/banner-bg.png" />
        <Image
          src="/banner-bg.png"
          alt="Hero background"
          fill
          className="object-cover -z-10"
          priority
          quality={85}
          sizes="100vw"
        />
      </picture>

      {/* Dark overlay gradient for contrast */}
      <div className="absolute inset-0 bg-black/65 dark:bg-black/80 -z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        
        <h1 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Hello, I&rsquo;m <span className="text-primary drop-shadow-sm">Yusuf Ansari</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 dark:text-gray-500 font-light leading-relaxed">
          A passionate Front-End Web Developer crafting fast, accessible, and responsive digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="w-full sm:w-auto px-8 font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            View My Work
          </Button>
          <a
            className="w-full sm:w-auto h-11 px-6 rounded-md font-semibold inline-flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white hover:text-black text-white backdrop-blur-xs transition-colors duration-300 shadow-sm"
            href="/resume - Yusuf Ansari.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="text-white/80 hover:text-white rounded-full p-2 hover:bg-white/10"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={22} />
        </Button>
      </div>
    </section>
  );
}
