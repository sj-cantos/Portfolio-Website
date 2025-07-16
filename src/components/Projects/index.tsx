import { useInView } from "../../hooks/useInView";
import ProjectCard from "./ProjectCard"; // Importing the ProjectCard component
import {projects} from "../../data/projectsData";
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
            className={`mt-9 text-5xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent leading-[1.1] pb-2 ${
              projectsInView ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}
          >
            Projects
          </h1>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((project, index) => (
             <ProjectCard key={index} project={project} inView={projectsInView} index={index} />
           ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
