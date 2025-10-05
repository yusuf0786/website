"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("scrollTo");
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, [searchParams]);

  return null; // doesn’t render UI
}
