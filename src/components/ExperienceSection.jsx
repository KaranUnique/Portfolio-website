import { Briefcase, Calendar, MapPin, ExternalLink, Award, TrendingUp } from "lucide-react";

const experiences = [
 
  {
    role: "Software Development Engineer",
    company: "Praskla Technology",
    period: "Oct 2025 - Present",
    location: "Remote",
    description: "Built end-to-end solutions using React, Node.js, Express.js with dynamic MongoDB and MySQL integration.",
    skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    type: "Current"
  },
  {
  "role": "Open Source Contributor",
  "company": "Social Winter of Code",
  "period": "Nov 2025 – Present",
  "location": "Remote",
  "description": "Contributing to open-source projects and enhanced existing features.",
  "skills": ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
  "type": "Current"
},
   {
  "role": "Open Source Contributor",
  "company": "Hacktoberfest",
  "period": "Oct 2025",
  "location": "Remote",
  "description": "Contributed to open-source projects by building full-stack features using React, Node.js, and Express.js and MongoDB.",
  "skills": ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "MySQL"],
  "type": "Completed"
},
  {
    role: "Frontend Developer Intern",
    company: "Cube AI Solution",
    period: "Jan 2025 - Mar 2025",
    location: "Remote",
    description: "Built responsive web apps using React, TailwindCSS, and JavaScript, focusing on mobile-first design and cross-browser compatibility.",
    skills: ["React", "Tailwind CSS", "Vite", "API Integration"],
    type: "Completed"
  },
  {
    role: "Full-Stack Development Intern",
    company: "Octanet Services Pvt. Ltd.",
    period: "Jun 2024 - Mar 2024",
    location: "Remote",
    description: "Built end-to-end solutions using React, Node.js, Express.js with dynamic MongoDB and MySQL integration.",
    skills: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    type: "Completed"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building digital solutions through hands-on experience in modern web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-10 group">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-6 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
              
              {/* Experience card */}
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="relative bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group-hover:border-primary/30">
                  
                  {/* Card arrow for desktop */}
                  <div className={`hidden md:block absolute top-6 ${idx % 2 === 0 ? '-right-2' : '-left-2'} w-4 h-4 rotate-45 bg-card border-l border-t border-border group-hover:border-primary/30 transition-colors duration-300`}></div>
                  
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      exp.type === 'Current' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20 animate-pulse' 
                        : 'bg-primary/10 text-primary border-primary/20'
                    }`}>
                      {exp.type === 'Current' ? '🚀 Current' : '✅ Completed'}
                    </span>
                    <Award className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Role and company */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-muted-foreground text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/90 mb-4 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-primary/5 border border-primary/10 text-foreground text-xs font-medium hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-block relative">
            <div className="relative bg-card rounded-xl p-6 border border-border shadow-lg">
              <h3 className="text-lg font-bold mb-2">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-4 max-w-sm mx-auto text-sm">
                I'm excited to take on new challenges and contribute to innovative projects.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md text-sm"
              >
                Let's work together <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
