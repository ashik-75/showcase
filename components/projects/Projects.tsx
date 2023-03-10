import { ProjectType } from "@/client/project.types";
import projects from "./data";
import Project from "./Project";

function Projects() {
  return (
    <div className="space-y-5 scroll-mt-20" id="projects">
      <h1 className="font-semibold text-xl">Featured Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-7">
        {projects?.map((project: ProjectType) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
