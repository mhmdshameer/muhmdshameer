import { Download, ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    company: "ECLIDSE TECHNOLOGIES",
    role: "Full-Stack Developer",
    period: "2024–2025",
    location: "Kerala, India",
    achievements: [
      "Developed and maintained 5+ responsive web platforms using Next.js, React, TypeScript, and Tailwind CSS",
      "Increased platform scalability by 30% and improved user engagement",
      "Consistently achieved 90+ PageSpeed scores across multiple client websites",
      "Reduced development time by 25% through reusable component libraries",
      "Raised customer satisfaction scores by 30% through effective client coordination"
    ]
  },
  {
    company: "Freelance Projects",
    role: "Full-Stack & Frontend Development",
    period: "2024–2025",
    location: "Remote",
    achievements: [
      "AdamLex: Improved user flow by 30% with React + TypeScript multi-role dashboards",
      "Union Computers: Reduced processing delays by 40% through efficient UI workflows",
      "Najam Al Akhlas: Achieved 90+ PageSpeed score and improved local visibility by 40%"
    ]
  }
];

const education = [
  {
    institution: "Indira Gandhi National Open University",
    degree: "Bachelor's in English Literature",
    period: "2021–2024",
    location: "India"
  },
  {
    institution: "Coordination of Islamic Colleges",
    degree: "WAFY (Islamic Religious Education)",
    period: "2018–2024",
    location: "India"
  }
];

export function Resume() {
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1GwZgvRVGylszOZ7P_FFIltiKuj0CU0Hk/view?usp=drive_link', '_blank');
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1GwZgvRVGylszOZ7P_FFIltiKuj0CU0Hk/view?usp=drive_link', '_blank');
  };

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Resume
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional experience delivering scalable web solutions with proven business impact.
            </p>
            
            {/* Resume Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openResume}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <Button
                onClick={downloadResume}
                variant="outline"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <div className="space-y-12">
            {/* Experience Section */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Professional Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div
                    key={job.company}
                    className="card-elevated bg-card p-6 rounded-xl"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">
                          {job.role}
                        </h4>
                        <p className="text-lg font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-2 mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.institution}
                    className="card-elevated bg-card p-6 rounded-xl"
                    style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
                  >
                    <h4 className="font-semibold text-primary mb-2">
                      {edu.degree}
                    </h4>
                    <p className="font-medium mb-2">{edu.institution}</p>
                    <div className="text-sm text-muted-foreground">
                      <p>{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Training */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Development</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-elevated bg-card p-4 rounded-xl">
                  <h4 className="font-semibold text-primary">Web Development Bootcamp</h4>
                  <p className="text-sm text-muted-foreground">Angela Yu</p>
                </div>
                <div className="card-elevated bg-card p-4 rounded-xl">
                  <h4 className="font-semibold text-primary">Harvard CS50</h4>
                  <p className="text-sm text-muted-foreground">Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}