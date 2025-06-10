import Header from "./Header/index";
import Hero from "./Hero/index";
import About from "./About/index";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
