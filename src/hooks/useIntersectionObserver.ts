import { useEffect, useRef } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

export function useIntersectionObserver<T extends HTMLElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true, onIntersect } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("animate-fade-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          onIntersect?.(entry);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, onIntersect]);

  return ref;
}
