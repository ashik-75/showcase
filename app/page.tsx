import About from "../components/About";
import Credentials from "../components/Credentials";
import Hero from "../components/Hero";
import Positions from "../components/Position";
import Projects from "../components/projects/Projects";
import TechStack from "../components/Tech/Tech-stack";

function Homepage() {
  return (
    <div>
      <div className="mt-10 p-5 flex flex-col md:flex-row gap-10">
        <div className="shrink-0">
          <img
            src="/man.png"
            className="h-40 w-40 object-top rounded-full object-cover shrink-0"
            alt=""
          />
        </div>

        <div className="space-y-10">
          <Hero />
          <About />
          <section id="experience" className="scroll-mt-20 space-y-5">
            <Positions />
            <Credentials />
          </section>

          <TechStack />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
