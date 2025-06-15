import React, { useState, useEffect } from "react";
// ...other imports...
import TechLogo from "../../TechLogo";
interface Project {
  title: string;
  images: string[]; // Optional image property
  description: string;
  technologies: string[];
}
function ProjectCard({ project, inView, index }: { project: Project; inView: boolean; index: number }) {
  const [current, setCurrent] = useState(0);

  // Auto-advance the image every 3 seconds
  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div
      className={`bg-blue-950 overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 flex flex-col gap-3 ${
        inView ? "animate-fadeInUp delay-400" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 300}ms` }}
    >
      <div className="relative w-full h-48">
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full h-48 object-cover transition-all duration-500"
        />
        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === current ? "bg-blue-400" : "bg-blue-900/60"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-400">{project.description}</p>
        <div>
          <div className="text-xs font-bold flex flex-wrap gap-1 text-gray-400">
            {project.technologies.map((tech, techIndex) => (
              <div
                key={techIndex}
                className=" bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-200 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105  rounded-xl p-1 px-1.5 flex gap-0.5"
              >
                <TechLogo tech={tech} size={16} />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;