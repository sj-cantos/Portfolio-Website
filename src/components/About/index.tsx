import { useInView } from "../../hooks/useInView";
import aboutData from "../../data/aboutData";
const About = () => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <section id="about" className="min-h-screen bg-blue-900">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 text-white flex flex-col items-center">
          <div ref={aboutRef} className="max-w-4xl mx-auto w-full">
            <h2
              className={`mt-5 text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent
                animate-slideInLeft delay-400
                ${aboutInView ? "animate-fadeInUp delay-400" : "opacity-0"}
              `}
            >
              About Me
            </h2>
            <div className={`mt-7 grid md:grid-cols-2 gap-12 items-center mb-16 ${aboutInView ? "animate-fadeInUp" : "opacity-0"}`}>
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transform transition-all duration-500 hover:text-gray-200">
                  I'm a passionate full-stack software engineer with over 5
                  years of experience building scalable web applications and
                  distributed systems. I love turning complex problems into
                  simple, elegant solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6 transform transition-all duration-500 hover:text-gray-200">
                  My journey in tech started with a Computer Science degree, but
                  my real education comes from constantly experimenting with new
                  technologies and contributing to open-source projects.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed transform transition-all duration-500 hover:text-gray-200">
                  When I'm not coding, you'll find me exploring the latest tech
                  trends, contributing to developer communities, or working on
                  side projects that solve real-world problems.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {aboutData.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-blue-950 p-6 rounded-lg backdrop-blur-sm border border-gray-600 hover:border-gray-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group ${aboutInView ? "animate-fadeInUp delay-500" : "opacity-0"}`}
                    style={{ animationDelay: `${0.3 + index * 0.5}s` }}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-blue-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
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
