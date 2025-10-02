import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaDocker } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Interview Preparation AI",
    description:
      "An AI-powered interview preparation platform built with React and Express.",
    image: "/projects/InterviewPrepAI.png",
    tag: ["React.js", "Tailwind", "ExpressJs", "MongoDB"],
     demoUrl: "https://interview-preparation-ai-zu05.onrender.com/",
    githubUrl: "https://github.com/KaranUnique/Interview-Prep-Tracker",
  },
    {
    id: 2,
    title: "Code Migration CLI",
    description:
      "A lightweight CLI tool to automate code migration seamlessly and transform code",
    image: "/projects/CodeMigration.png",
    tag: ["JavaScript", "Node.js", "Chalk", "Yargs"],
    demoUrl: "https://hub.docker.com/r/karanunix/code-migration-cli", // Docker Hub link
    githubUrl:
      "https://github.com/KaranUnique/Code-Migration-CLI-Tool",
  },
  {
    id: 3,
    title: "Scribbly Notes-Application",
    description:
      "A modern and intuitive notes manager built with React, Bootstrap, and Express.",
    image: "/projects/Mynotes.png",
    tag: ["React.js", "Bootstrap", "Express.js", "MongoDB"],
    demoUrl: "https://scribbly-notes.onrender.com/",
    githubUrl: "https://github.com/KaranUnique/MyNotes",
  },
 
   {
    id: 4,
    title: "CryptoHub",
    description:
      "CryptoHub brings you real-time crypto prices and trends with insights on your favorite coins.",
    image: "/projects/Cryptohub.png",
    tag: ["React.js", "Tailwind", "CoinGecko API"],
    demoUrl: "https://crypto-hub-rosy.vercel.app/",
    githubUrl: "https://github.com/KaranUnique/CryptoHub",
  },
    {
    id: 5,
    title: "Sporix Landing Page",
    description:"Responsive website for our college feast with event details and registrations",
    image: "/projects/CollegeFeast.png",
    tag: ["React.js", "Tailwind"],
    demoUrl: "https://sporix2k25.vercel.app/",
    githubUrl:
      "https://github.com/KaranUnique/symposium",
  },
  {
    id: 6,
    title: "Sustainable Navigation App",
    description:
      "A sustainable navigation app that suggests eco-friendly routes based on optimal paths and users’ health preferences",
    image: "/projects/SNA.png",
    tag: ["React Native", "Express.js", "MongoDB"],
    // demoUrl: "#",
    githubUrl:
      "https://github.com/KaranUnique/Sustainable-Navigation-App",
  },
  {
    id: 7,
    title: "Drowsiness Detection",
    description:
      "A real-time drowsiness detection system using computer vision and machine learning.",
    image: "/projects/vision.png",
    tag: ["Python", "OpenCV", "Dlib", "Pygame", "Scipy"],
    // demoUrl: "#",
    githubUrl:
      "https://github.com/KaranUnique/Vision-Based-Drowsiness-Detection",
  },
  
 
 
  // {
  //   id: 6,
  //   title: "Gym-Ecommerce",
  //   description:
  //     "A beautiful gym e-commerce landing page using HTML ,CSS and JavaScript.",
  //   image: "/projects/GymProject.png",
  //   tag: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "#",
  //   githubUrl: "https://github.com/KaranUnique/Gym-Ecommerce",
  // },

  // {
  //   id: 6,
  //   title: "Machine Learning Project Copy",
  //   description: "A beatiful landing page using React and Tailwind.",
  //   image: "/projects/SampleP1.png",
  //   tag: ["React", "Tailwind", "Superbase"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3; // Show 3 projects at a time

  const nextProjects = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= projects.length
        ? 0
        : prevIndex + projectsPerPage
    );
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, projects.length - projectsPerPage)
        : Math.max(0, prevIndex - projectsPerPage)
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="relative">
          {/* Navigation arrows and indicators only for md and up */}
          <div className="hidden md:block">
            <button
              onClick={prevProjects}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm shadow-lg"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <button
              onClick={nextProjects}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm shadow-lg"
              aria-label="Next projects"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>

          {/* Projects Grid: show all projects in order for mobile, carousel for md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {(window.innerWidth < 768 ? projects : visibleProjects).map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-lg card-hover transform transition-all duration-300 flex flex-col justify-between h-full border border-border dark:border-primary/20"
              >
                <div className="h-48 overflow-hidden flex items-center justify-center bg-background dark:bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tag.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                         className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground text-center">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-center">
                    {project.description}
                  </p>
                  <div className="flex justify-center items-center mt-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-1"
                          aria-label="View demo"
                        >
                          {project.title === "Code Migration CLI" ? (
                            <FaDocker size={22} />
                          ) : (
                            <ExternalLink size={20} />
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(projects.length / projectsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / projectsPerPage) === index
                  ? "bg-primary"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
              aria-label={`Go to project set ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KaranUnique"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
