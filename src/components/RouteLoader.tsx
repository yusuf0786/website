"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    isLoading && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-50/80 dark:bg-[#110011]/80 backdrop-blur-sm animate-in fade-in-0 duration-300">
        <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-300">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    )
  );
}
