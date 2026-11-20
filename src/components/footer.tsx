import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card text-foreground py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tight">
              Yusuf <span className="text-primary">Ansari</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Front-End Web Developer &bull; Building modern, accessible web applications.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yusuf0786"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-ansari-a44275218/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:webdev.yusufansari@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {currentYear} Yusuf Ansari. All rights reserved.</p>
            <p className="text-xs mt-1">
              Crafted with Next.js, React 19, TypeScript &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
