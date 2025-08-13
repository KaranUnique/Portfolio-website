import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Interview Preparation Tracker",
    description:
      "A smart and organized interview preparation tracker created using React and Express.",
    image: "/projects/PreparationTracker.png",
    tag: ["React", "Tailwind", "ExpressJs", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/KaranUnique/Interview-Prep-Tracker",
  },
  {
    id: 2,
    title: "Scribbly Notes-Application",
    description:
      "A modern and intuitive notes manager built with React, Bootstrap, and Express.",
    image: "/projects/Mynotes.png",
    tag: ["React", "Bootstrap", "ExpressJs", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/KaranUnique/MyNotes",
  },
  {
    id: 3,
    title: "Drowsiness Detection",
    description: "A real-time drowsiness detection system using computer vision and machine learning.",
    image: "/projects/vision.png",
    tag: ["Python", "OpenCV","Dlib", "TensorFlow"],
    demoUrl: "#",
    githubUrl: "https://github.com/KaranUnique/Vision-Based-Drowsiness-Detection",
  },
  {
    id: 4,
    title: "Gym-Ecommerce",
    description:
      "A beautiful gym e-commerce landing page using HTML ,CSS and JavaScript.",
    image: "/projects/GymProject.png",
    tag: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/KaranUnique/Gym-Ecommerce",
  },
  {
    id: 5,
    title: "StellarX Landing Page",
    description:
      "A sleek StellarX landing page built with React and Tailwind CSS.",
    image: "/projects/StellarX.png",
    tag: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/KaranUnique/StellarX-landing-page",
  },
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
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevProjects}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm shadow-lg"
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextProjects}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 backdrop-blur-sm shadow-lg"
            aria-label="Next projects"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover transform transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
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

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {/* <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="View demo"
                      >
                        <ExternalLink size={20} />
                      </a> */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
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
