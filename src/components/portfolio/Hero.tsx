import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechIcons } from "./TechIcons";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      {/* Animated Tech Icons Background */}
      <TechIcons />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block hero-text">Muhammed</span>
              <span className="block hero-text">Shameer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering scalable web solutions with React, Next.js, TypeScript, and Node.js. 
            Proven track record of improving performance by 30% and serving 250K+ users.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1GwZgvRVGylszOZ7P_FFIltiKuj0CU0Hk/view?usp=drive_link', '_blank')}
            >
              View Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-12 w-12 hover:bg-accent"
            >
              <a
                href="https://github.com/mhmdshameer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-12 w-12 hover:bg-accent"
            >
              <a
                href="https://linkedin.com/in/muhmdshameer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-12 w-12 hover:bg-accent"
            >
              <a
                href="mailto:mhmdshameerpm@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to about section"
            >
              <span className="text-sm">Scroll down</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}