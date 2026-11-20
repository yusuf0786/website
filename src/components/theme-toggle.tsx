"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`w-9 h-9 rounded-full ${className ?? ""}`}
        aria-label="Toggle theme"
        disabled
      >
        <span className="sr-only">Toggle theme</span>
        <div className="w-4 h-4 rounded-full bg-muted-foreground/30 animate-pulse" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`relative w-9 h-9 rounded-full transition-colors cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 ${className ?? ""}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme (currently ${theme} mode)`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
