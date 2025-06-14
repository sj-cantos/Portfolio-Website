import React from "react";

import { useInView } from "../../hooks/useInView";
import { skillsData } from "../../data/skillsData";
import TechLogo from "../../TechLogo";

interface Project {
  title: string;
  image?: string; // Optional image property
  description: string;
  technologies: string[];
}
const Projects = () => {
  const [projectRef, projectsInView] = useInView({ threshold: 0.2 });

  const projects: Project[] = [
    {
      title: "HydroMaze App",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A full-stack web-based ordering system specifically designed for a water refilling station, offering an intuitive interface for customers to place refill requests online.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Mapbox API",
      ],
    },
    {
      title: "HydroMaze Admin Dashboard",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A full-stack web-based admin dashboard for managing the water refilling station, providing insights into customer orders and inventory.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Chart.js",
        "Mapbox API",
      ],
    },
    {
      title: "Hotel Reservation System",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A full-stack web-based application for managing hotel bookings, providing an intuitive interface for customers to reserve rooms online.",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Chart.js"],
    },
    {
      title: "Books API",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "An API for managing a collection of books, providing features for searching, adding, and removing books.",
      technologies: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Hibernate",
        "JUnit",
        "Docker",
      ],
    },
    // Add more projects as needed
  ];

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
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              return (
                <div
                  className={`bg-gray-800 overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 flex flex-col gap-3 ${
                    projectsInView ? "animate-fadeInUp delay-400" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover h-48"
                  />
                  <div className="p-6 flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                    <div>
                      <div className="text-xs font-bold flex flex-wrap gap-1 text-gray-400">
                        {project.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className=" bg-gray-600 rounded-xl p-1 px-1.5 flex gap-0.5"
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
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
