

import { useInView } from "../../hooks/useInView";
import { skillsData } from "../../data/skillsData";
const Skills = () => {
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });

  return (
    <>
      <section id="skills" className="min-h-screen bg-blue-950">
        <div
          ref={skillsRef}
          className="container mx-auto px-6 py-12 text-white flex flex-col items-center align-center justify-center"
        >
          <h1
            className={`mt-5 text-5xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent bg-clip-text pb-2 ${
              skillsInView ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}
          >
            Skills and Technologies
          </h1>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8`}>
            {skillsData.map((category, index) => {
              return (
                <div
                  key={index}
                  className={`rounded-lg p-6 bg-gray-900 max-w-sm ${
                    skillsInView ? `animate-fadeInDown` : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 500 + 200}ms`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center mb-5">
                    {category.icon}
                    <h1 className="text-center text-lg font-semibold mt-3">
                      {category.title}
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-200 px-3 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group/skill"
                        >
                          {skill.icon}
                          {skill.name}
                        </div>
                      );
                    })}
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

export default Skills;
