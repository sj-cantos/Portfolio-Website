import Header from "./Header/index";
import Hero from "./Hero/index";
import About from "./About/index";
import Skills from "./Skills/index";
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
