import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          404 Error
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-base mb-8 leading-relaxed">
          The page you are looking for doesn&rsquo;t exist or may have been moved.
        </p>
        <Button asChild size="lg" className="gap-2 font-semibold">
          <Link href="/">
            <Home size={18} />
            Return to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
