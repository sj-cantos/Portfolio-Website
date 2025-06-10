import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10 ">
          <div className="flex flex-col items-center text-center">
            <h1 className="animate-fadeInUp text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fadeInUp delay-200">
              Shannon John Cantos
            </h1>
            <h2 className="text-gray-200 font-light text-3xl animate-fadeInUp delay-200 ">
              Software Engineer
            </h2>
            <p className="max-w-2xl text-lg text-gray-400 mt-4 animate-fadeInUp delay-400 ">
              Crafting exceptional digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and building
              products that make a difference.
            </p>
            <div className="flex space-x-4 mt-10 animate-fadeInUp delay-400">
              <a
                href=""
                className="text-gray-100 bg-gradient-to-r from-blue-600 to-purple-500 py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                View My Work
              </a>
              <a
                href=""
                className="text-gray-100  py-3 px-8 rounded-lg font-semibold border-gray-400 border-1 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex space-x-6 mt-8 justify-center animate-fadeInUp delay-600">
            <a
              href="https://github.com/shannoncantos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shannoncantos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out"
                size={24}
              />
            </a>
            <a
              href="mailto:shannoncantos@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail
                className="text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out"
                size={24}
              />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </section>
    </>
  );
};

export default Hero;
