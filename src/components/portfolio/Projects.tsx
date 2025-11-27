import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { TechIcons } from "./TechIcons";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Celebrity Smile Dental Clinic",
    description: "Built and deployed a scalable, bilingual dental clinic web app using React, TypeScript, Tailwind CSS, Node.js, and MongoDB with JWT authentication and admin CMS, enhancing patient experience by 40%.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS", "Bilingual Support"],
    impact: "40% improvement in patient experience and operational efficiency",
    github: "#",
    demo: "#",
    images: [
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1764234802/Screenshot_85_bnfq1x.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1764234789/Screenshot_86_ovtkfs.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1764234757/Screenshot_89_dxvm5f.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1764234731/Screenshot_90_aa7cd2.png"
    ],
    featured: true,
  },
  {
    title: "AdamLex - Legal Management Platform",
    description: "Spearheaded React + TypeScript multi-role dashboards, improving user flow by 30%. Implemented secure client document storage and automated PDF-to-email delivery features.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "PDF Processing"],
    impact: "30% improved user flow, boosted staff productivity",
    github: "#",
    demo: "#",
    images: [
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676795/Screenshot_81_by9vhw.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676592/Screenshot_70_l7ub2e.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676697/Screenshot_71_mkoeb6.png"
    ],
    featured: true,
  },
  {
    title: "Union Computers - Work Management",
    description: "Designed a workflow tool for 20+ staff to manage laptop repairs, including device logging, issue checklists, and repair time estimates.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL"],
    impact: "40% reduction in processing delays",
    github: "#",
    demo: "#",
    images: [
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676462/Screenshot_78_s8x8si.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676507/Screenshot_79_t4wl2a.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676550/Screenshot_80_qohrds.png"
    ],
    featured: true,
  },
  {
    title: "BookMania - Library Management System",
    description: "Developed end-to-end MERN platform with authentication, search, and borrowing, serving 500+ test users. Optimized MongoDB queries, reducing data retrieval time by 30%.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT Auth"],
    impact: "30% faster data retrieval, 500+ users",
    github: "https://github.com/mhmdshameer",
    demo: "#",
    images: [
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676908/Screenshot_73_j6wjvq.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758677033/Screenshot_82_xyg7ej.png"
    ],
    featured: false,
  },
  {
    title: "Najam Al Akhlas - Delivery Services",
    description: "Built an SEO-friendly static site with HTML and CSS, optimized for mobile-first performance. Achieved a 90+ PageSpeed score.",
    tech: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
    impact: "90+ PageSpeed score, 40% improved visibility",
    github: "#",
    demo: "#",
    images: [
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676836/Screenshot_50_luii0u.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758676870/Screenshot_51_veqiay.png"
    ],
    featured: false,
  },
  {
    title: "Discord Clone",
    description: "Engineered a scalable Discord clone with real-time messaging and user authentication using WebSocket technology to enhance communication.",
    tech: ["React", "Redux", "Socket.io", "Firebase", "WebSocket"],
    impact: "Real-time messaging, scalable architecture",
    github: "#",
    demo: "#",
    images: [
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758677684/Screenshot_2025-09-24_070250_ji2oas.png",
      "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758677767/Screenshot_83_zmxvnu.png"
    ],
    featured: false,
  },
];

function FeaturedProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="project-card group h-full"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="space-y-6 h-full flex flex-col">
        {/* Interactive Image Gallery */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group-hover:shadow-2xl transition-all duration-500">
          <img 
            src={project.images[currentImageIndex]} 
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Image Navigation */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-between opacity-0 group-hover:opacity-100">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="ml-2 bg-white/20 hover:bg-white/40 text-white border-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="mr-2 bg-white/20 hover:bg-white/40 text-white border-none"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 hover:bg-primary/10"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source code"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-8 w-8 hover:bg-primary/10"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="text-sm font-medium text-primary bg-primary/5 rounded-lg p-3 border border-primary/10">
              📈 {project.impact}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Animated Tech Icons Background */}
      <TechIcons variant="projects" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack 
              development and delivering measurable business impact.
            </p>
          </div>

          {/* Featured Projects Carousel */}
          <div className="mb-16">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <FeaturedProjectCard project={project} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Additional Projects
            </h3>
            <Carousel 
              className="w-full max-w-5xl mx-auto"
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                })
              ]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {otherProjects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <div
                      className="project-card h-full"
                      style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
                    >
                      <div className="space-y-4 h-full flex flex-col">
                        {/* Smaller images for additional projects */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {project.images.map((image, imageIndex) => (
                            <div 
                              key={imageIndex}
                              className="aspect-video rounded-md overflow-hidden bg-muted"
                            >
                              <img 
                                src={image} 
                                alt={`${project.title} screenshot ${imageIndex + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-sm">{project.title}</h4>
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                              className="h-7 w-7"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View source code"
                              >
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                              className="h-7 w-7"
                            >
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View live demo"
                              >
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground flex-1">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mt-auto">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
