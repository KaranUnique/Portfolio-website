import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl hidden md:block font-semibold">
              MERN Stack Developer
            </h3>
            {/* About text visible on all sizes now */}
            <div className="hidden md:block border border-primary/30 rounded-xl p-6 bg-background/40 backdrop-blur-sm space-y-4">
              <p className="text-muted-foreground leading-relaxed md:leading-normal">
                I’m a passionate web developer interested in creating impactful digital solutions. I enjoy building responsive frontends and full-stack applications that deliver user-friendly experiences. Skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I’m always eager to learn and take on new challenges to grow as a developer.
              </p>
            </div>
            {/* Full-sized Skills Cards for mobile (same style as desktop front side) */}
            <div className="md:hidden grid grid-cols-1 gap-6 pt-2">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                   
                     <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
    <h4 className="font-semibold text-lg">B.E. Computer Science and Engineering</h4>
    <p className="text-muted-foreground text-sm">Innovating digital solutions with a solid engineering foundation</p>
</div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">MERN Stack Developer</h4>
                    <p className="text-muted-foreground text-sm">Building dynamic and responsive web applications using the MERN stack.</p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p className="text-muted-foreground text-sm">Leading project from conception to completion with agile methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/projects/Karan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
            {/* Mobile skills list removed per request to hide texts on small screens */}
          </div>
          {/* Static About Me cards for desktop (no flip, no image) */}
          <div className="hidden md:grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">B.E. Computer Science and Engineering</h4>
                  <p className="text-muted-foreground text-sm">Innovating digital solutions with a solid engineering foundation</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">MERN Stack Developer</h4>
                  <p className="text-muted-foreground">Building dynamic and responsive web applications using the MERN stack.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">Leading project from conception to completion with agile methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
