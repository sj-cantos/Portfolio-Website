import React from "react";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface AboutData {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const aboutData: AboutData[] = [
  {
    icon: <Code className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: <Coffee className="h-6 w-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Passion for Learning",
    description: "Constantly exploring new technologies and best practices",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Innovative Solutions",
    description: "Creating unique solutions to complex problems",
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />,
    title: "Team Collaboration",
    description: "Working effectively in diverse teams to achieve common goals",
  },
];

const About = () => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <section className="min-h-screen bg-blue-900">
        <div className="container mx-auto px-6 py-12 text-white flex flex-col items-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`mt-5 text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text
                animate-slideInLeft delay-400
                ${aboutInView ? "animate-fadeInUp delay-400" : "opacity-0"}
              `}
            >
              About Me
            </h2>
            <div
              ref={aboutRef}
              className={`flex flex-row mb-8 text-gray-200 transition-opacity duration-700
                ${aboutInView ? "animate-slideInRight delay-400" : "opacity-0"}
              `}
            >
              <div>
                <p className="max-w-2xl text-lg mt-5 ">
                  I am a software engineer with a passion for building web
                  applications that make a difference. With a strong background
                  in JavaScript and React, I enjoy creating intuitive user
                  interfaces and seamless user experiences.
                </p>
                <p className="max-w-2xl text-lg mt-5 ">
                  My journey in tech started with a Computer Science degree, but
                  my real education comes from constantly experimenting with new
                  technologies and contributing to open-source projects.
                </p>
                <p className="max-w-2xl text-lg mt-5 ">
                  When I'm not coding, you'll find me exploring the latest tech
                  trends, or working on
                  side projects that solve real-world problems.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 ml-7">
                {aboutData.map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 border mt-5 bg-blue-950 rounded-lg backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-xl group
                      ${aboutInView ? "animate-fadeInUp" : "opacity-0"}
                    `}
                    style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                  >
                    {item.icon}
                    <h3 className="font-semibold mb-3 text-gray-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
