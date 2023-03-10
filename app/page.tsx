import ProfileImage from "@/components/ProfileImage";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Hero from "../components/Hero";
import Positions from "../components/Position";
import Projects from "../components/projects/Projects";
import TechStack from "../components/Tech/Tech-stack";

async function Homepage() {
  return (
    <div>
      <div className="mt-10 p-5">
        <div className="space-y-10">
          <ProfileImage />
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
