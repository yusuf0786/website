"use client";
// import Image from "next/image";

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import RouteLoader from "@/components/RouteLoader";
import Skills from "@/components/skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [clicked, setClicked] = useState(false);

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
        {clicked || isInitialLoad ? <RouteLoader/> :
        <>
        <Hero />
        <About />
        <Projects clicked={clicked} setClicked={setClicked}/>
        <Skills />
        <Contact />
        </>
        }
      </main>
  );
}
