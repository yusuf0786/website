// app/components/RouteLoader.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
     isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50 bg-gray-50 dark:bg-gray-900">
           <div className="loader"></div>
        </div>
    )
  );
}
