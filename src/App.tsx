import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import About from "./components/About/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects";
import ParticleBackground from "./particle";
import FloatingElements from "./FloatingElement";

function App() {
  return (
    <div className="min-h-screen">
      
      <Header />
      <main>
        <ParticleBackground />
        <FloatingElements />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
