import { useEffect, useRef } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  onIntersect?: (entry: IntersectionObserverEntry) => void
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", onIntersect } = options
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
          onIntersect?.(entry)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, onIntersect])

  return ref
}
