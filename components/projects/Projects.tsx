import { groq } from "next-sanity";
import { client } from "../../client/sanity";
import Project from "./Project";

async function Projects() {
  const query = groq`*[_type == "project"]`;
  const projects = await client.fetch(query);

  return (
    <div className="space-y-5 scroll-mt-20" id="projects">
      <h1 className="font-semibold text-xl">Featured Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-7">
        {projects.map((project: any) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
