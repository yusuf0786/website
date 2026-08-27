"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

export default function Hero() {
  const sectionRef = useIntersectionObserver()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative opacity-0 transition-opacity duration-1000 overflow-hidden"
    >
      {/* Background image with overlay */}
      <Image
        src="/banner-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hello, I&rsquo;m <span className="text-primary">Yusuf Ansari</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          A passionate front End Web Developer creating mesmerizing and functional web apps
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={scrollToAbout} className="px-8 border hover:border-black hover:bg-black cursor-pointer duration-300">
            View My Work
          </Button>
          <a
            className="px-8 bg-gray-400 border-white text-black hover:bg-white hover:text-primary border rounded-lg py-2 text-lg font-medium transition-colors duration-300 inline-block"
            href="/resume - Yusuf Ansari.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="text-white hover:text-primary rounded-full"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  )
}
