import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import About from "./components/About/index";
import Skills from "./components/Skills/index";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
