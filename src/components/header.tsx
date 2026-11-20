"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (sectionId === "projects") {
      router.push("/project");
      return;
    }

    if (pathname !== "/") {
      router.push(`/?scrollTo=${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/85 dark:bg-background/85 backdrop-blur-md shadow-xs border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-xl sm:text-2xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={(e) => {
            if (
              e.button === 0 &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.shiftKey &&
              !e.altKey &&
              pathname === "/"
            ) {
              e.preventDefault();
              scrollToSection("home");
            }
          }}
        >
          Yusuf <span className="text-primary">Ansari</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
                isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="pl-2 border-l border-border/40">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-md",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2.5 text-base font-medium text-left rounded-md hover:bg-muted text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
