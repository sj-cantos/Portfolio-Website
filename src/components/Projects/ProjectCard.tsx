
import { Zoom } from 'react-slideshow-image';
import TechLogo from "../../TechLogo";
import 'react-slideshow-image/dist/styles.css';

interface Project {
    title: string;
    images: string[];
    description: string;
    technologies: string[];
}

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
            <div className="p-6 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
                <div>
                    <div className="text-xs font-bold flex flex-wrap gap-1 text-gray-400">
                        {project.technologies.map((tech, techIndex) => (
                            <div
                                key={techIndex}
                                className=" bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-200 text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105  rounded-xl p-1 px-1.5 flex gap-0.5"
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