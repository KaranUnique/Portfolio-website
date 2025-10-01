import { Briefcase, Code, User } from "lucide-react";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>
            <p className="text-muted-foreground">
              I’m a passionate and dedicated web developer with a strong
              interest in building impactful digital solutions. From crafting
              responsive frontends to developing full-stack applications, I
              enjoy turning ideas into interactive, user-friendly experiences.
            </p>
            <p className="text-muted-foreground">
              I have hands-on experience with technologies like HTML, CSS,
              JavaScript, React, Node.js, and MongoDB. I’m constantly learning
              and love taking on new challenges that help me grow as a
              developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/projects/Updated_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="relative" style={{ perspective: '1000px', height: 'fit-content' }}>
            {/* Front Side - Skills Cards */}
            <div 
              className={`grid grid-cols-1 gap-6 transition-transform duration-1000 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
              style={{ 
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                 <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
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
                  <Briefcase className="h-6 w-6 text-primary"/>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p className="text-muted-foreground">Leading project from conception to completion with agile methodologies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Side - Your Photo */}
            <div 
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{ 
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'
              }}
            >
              <div className="gradient-border overflow-hidden h-full min-h-[400px] relative">
                <img 
                  src="/projects/Karan.jpg"
                  alt="Karan Manickam" 
                  className="w-full h-full object-cover rounded-2xl"
                  onLoad={() => console.log('✅ Image loaded successfully')}
                  onError={(e) => {
                    console.log('❌ Image failed, showing fallback');
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-purple-600 items-center justify-center text-white font-bold text-8xl absolute inset-0" style={{display: 'none'}}>
                  K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
