"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ProjectModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4 scrollbar-custom">
        <CardContent className="p-0">
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white shadow-lg cursor-pointer"
            >
              <X size={20} />
            </Button>
            <div className="absolute top-4 left-4">
              <span className="w-20 h-6 rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
            </div>
          </div>

          <div className="p-6 bg-[#f0f0f0] dark:bg-[rgb(17,0,17)] text-[#0f0f0f] dark:text-[#f0f0f0] space-y-5">
            <div className="h-8 w-2/3 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />

            <div className="space-y-3">
              <div className="h-4 w-full rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              <div className="h-4 w-11/12 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              <div className="h-4 w-4/5 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              <div className="h-4 w-2/3 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
            </div>

            <div>
              <div className="h-5 w-36 rounded-md mb-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              <div className="flex flex-wrap gap-2">
                <span className="h-7 w-20 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
                <span className="h-7 w-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
                <span className="h-7 w-24 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
                <span className="h-7 w-20 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
                <span className="h-7 w-28 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="h-11 flex-1 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              <div className="h-11 flex-1 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
