import { Zoom } from 'react-slideshow-image';
import { ExternalLink, Github } from 'lucide-react';
import TechLogo from "../../TechLogo";
import 'react-slideshow-image/dist/styles.css';
import type { Project } from '../../types/types';


function ProjectCard({ project, inView, index }: { project: Project; inView: boolean; index: number }) {
    return (
        <div
            className={`bg-blue-950 overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 flex flex-col gap-3 ${inView ? "animate-fadeInUp delay-400" : "opacity-0"
                }`}
            style={{ animationDelay: `${index * 300}ms` }}
        >
            <div className="relative w-full h-48">
                <Zoom
                    autoplay
                    duration={3000}
                    arrows={false}
                    indicators
                    pauseOnHover={false}
                    transitionDuration={1000}
                    easing="linear"
                    scale={1.1}
                    infinite={true}
                >
                    {project.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="w-full h-48">
                            <img
                                src={image}
                                alt={`${project.title} ${imageIndex + 1}`}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </Zoom>
            </div>
            <div className="p-6 flex flex-col justify-between gap-3 flex-1">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
                <div>
                    <div className="text-xs font-bold flex flex-wrap gap-1 text-gray-400">
                        {project.technologies.map((tech, techIndex) => (
                            <div
                                key={techIndex}
                                className=" bg-blue-950 text-blue-200 text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105  rounded-xl p-1 px-1.5 flex gap-0.5"
                            >
                                <TechLogo tech={tech} size={16} />
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Links at the bottom */}
                <div className="flex align-center justify-between mt-1 pt-2 border-t border-blue-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition"
                      aria-label="GitHub"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition"
                      aria-label="External Link"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;