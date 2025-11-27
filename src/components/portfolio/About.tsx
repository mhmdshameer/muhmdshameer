// Profile photo URL
const profilePhoto = "https://res.cloudinary.com/dkxmfqafi/image/upload/v1758459397/family_members/ddi07khakzf0otgtvl5z.jpg";

const skills = [
  // Frontend
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zod",
  // Backend
  "Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Socket.io",
  // Tools
  "Git", "Firebase", "Vercel", "CI/CD", "MongoDB Atlas", "tRPC", "Webpack", "Vite"
];

const stats = [
  { label: "Users Served", value: "250K+" },
  { label: "Performance Improvement", value: "30%" },
  { label: "Projects Delivered", value: "15+" },
  { label: "Years Experience", value: "2+" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,_hsl(var(--primary))_1px,_transparent_1px),_linear-gradient(-45deg,_hsl(var(--primary))_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate full-stack developer with a proven track record of delivering 
              scalable web solutions and measurable business impact.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-64 h-64 rounded-2xl overflow-hidden bg-muted animate-scale-in-center">
                  <img 
                    src={profilePhoto} 
                    alt="Muhammed Shameer - Full Stack Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Story */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Currently working as a Full-Stack Developer at ECLIDSE TECHNOLOGIES, 
                  where I've developed and maintained 5+ responsive web platforms, 
                  increasing platform scalability by 30% and improving user engagement.
                </p>
                <p>
                  I specialize in modern web technologies including React, Next.js, 
                  TypeScript, and Node.js. My experience ranges from building complex 
                  multi-role dashboards to optimizing frontend performance and SEO, 
                  consistently achieving 90+ PageSpeed scores.
                </p>
                <p>
                  Through freelance projects, I've spearheaded platforms like AdamLex 
                  (Legal Management) and Union Computers (Work Management), demonstrating 
                  my ability to deliver solutions that streamline workflows and boost productivity.
                </p>
              </div>
            </div>

          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Impact & Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card-elevated bg-card p-6 text-center rounded-xl group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:animate-bounce-subtle">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="skill-tag"
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}