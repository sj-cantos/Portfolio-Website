import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import About from "./components/About/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
