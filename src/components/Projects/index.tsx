import React from "react";

import { useInView } from "../../hooks/useInView";
import { skillsData } from "../../data/skillsData";
const Projects = () => {
  const [projectRef, projectsInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <section id="projects" className="min-h-screen bg-blue-900">
        <div
          ref={projectRef}
          className="container mx-auto px-6 py-12 text-white flex flex-col items-center align-center justify-center"
        >
          <h1
            className={`mt-9 text-6xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text leading-[1.1] pb-2 ${
              projectsInView ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}
          >
            Projects
          </h1>
          
        </div>
      </section>
    </>
  );
};

export default Projects;

