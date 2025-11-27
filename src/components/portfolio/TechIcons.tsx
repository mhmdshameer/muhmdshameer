import React from "react";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiRedux,
  SiZod
} from "react-icons/si";

interface TechIconsProps {
  variant?: "hero" | "projects";
}

// Tech icons with brand logos
const techIcons = [
  { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
  { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
  { icon: SiExpress, name: "Express", color: "text-gray-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
  { icon: SiRedux, name: "Redux", color: "text-[#764ABC]" },
  { icon: SiZod, name: "Zod", color: "text-[#3E67B1]" },
];

export function TechIcons({ variant = "hero" }: TechIconsProps) {
  // Static positions for the icons
  const iconPositions = variant === "hero" ? [
    { top: 10, left: 8 },
    { top: 20, right: 12 },
    { top: 35, left: 15 },
    { top: 50, right: 8 },
    { top: 65, left: 10 },
    { top: 80, right: 15 },
    { top: 15, left: 50 },
    { top: 40, right: 40 },
  ] : [
    { top: 8, right: 10 },
    { bottom: 15, left: 8 },
    { top: 25, left: 12 },
    { bottom: 25, right: 15 },
    { top: 60, right: 8 },
    { bottom: 40, left: 15 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Desktop icons */}
      <div className="hidden sm:block">
        {techIcons.slice(0, iconPositions.length).map((tech, index) => {
          const IconComponent = tech.icon;
          const position = iconPositions[index];
          
          return (
            <div
              key={tech.name}
              className="absolute animate-float"
              style={{
                left: position.left ? `${position.left}%` : undefined,
                right: position.right ? `${position.right}%` : undefined,
                top: position.top ? `${position.top}%` : undefined,
                bottom: position.bottom ? `${position.bottom}%` : undefined,
                animationDelay: `${index * 0.7}s`,
                animationDuration: `${3 + (index % 3)}s`,
              }}
            >
              <IconComponent 
                size={variant === "hero" ? 40 : 32} 
                className={`${tech.color} transition-all duration-300 hover:scale-110`}
              />
            </div>
          );
        })}
      </div>
      
      {/* Mobile icons */}
      <div className="sm:hidden">
        {techIcons.slice(0, 4).map((tech, index) => {
          const IconComponent = tech.icon;
          const mobilePositions = [
            { top: "15%", right: "10%" },
            { top: "35%", left: "8%" },
            { top: "55%", right: "12%" },
            { top: "75%", left: "10%" },
          ];
          
          return (
            <div
              key={`mobile-${tech.name}`}
              className="absolute animate-float"
              style={{
                top: mobilePositions[index].top,
                left: mobilePositions[index].left,
                right: mobilePositions[index].right,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${2.5 + (index % 2)}s`,
              }}
            >
              <IconComponent 
                size={24} 
                className={`${tech.color} transition-colors duration-500`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}