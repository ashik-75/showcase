import Project from "./Project";
import { projectsData } from "./projectData";

function Projects() {
  return (
    <div className="space-y-5 scroll-mt-20" id="projects">
      <h1 className="font-semibold text-xl">Featured Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
