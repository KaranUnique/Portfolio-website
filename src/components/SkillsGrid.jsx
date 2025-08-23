import React from "react";
import "devicon/devicon.min.css"; // import devicon styles
import { FaCode, FaNetworkWired } from "react-icons/fa"; // fallback + REST API

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
  },
  {
    category: "Frontend Technologies",
    items: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Vite.js", icon: "devicon-vitejs-plain colored" }
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySql", icon: "devicon-mysql-plain colored" },
      { name: "REST APIs", icon: <FaNetworkWired className="text-primary text-4xl" /> }, // API icon
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git/GitHub", icon: "devicon-git-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Intellij IDEA", icon: "devicon-intellij-plain colored" },
      { name: "Kiro IDE", icon: <FaCode className="text-primary text-4xl" /> },
      { name: "Canva", icon: "devicon-canva-plain colored" }, // fallback
    ],
  },
];

export const SkillsGrid = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-20">
          {skills.map((block, idx) => (
            <div key={idx} className="text-center">
              {/* category title left aligned */}
              <h3 className="text-2xl font-semibold mb-10 text-left">
                {block.category}
              </h3>

              {/* skills grid in center */}
              <div className="flex flex-wrap justify-center gap-10">
                {block.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {typeof skill.icon === "string" ? (
                        <i className={`${skill.icon} text-4xl`}></i>
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
