import { urlFor } from "../../client/sanity";
import { ProjectType } from "./project.types";

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-3 border p-3 rounded-lg dark:border-gray-700 shadow -z-10">
      <div className="aspect-w-4 aspect-h-3 rounded overflow-hidden cursor-pointer hover:opacity-75">
        <a target={"_blank"} href={project.link}>
          <img
            src={urlFor(project.image).url()}
            className="w-full h-full rounded-lg border"
            alt=""
          />
        </a>
      </div>

      <div>
        <a target={"_blank"} href={project.link}>
          <h1 className="hover:underline cursor-pointer text-gray-600 dark:text-gray-200 hover:underline-offset-2 font-semibold text-lg">
            {project.title}
          </h1>
        </a>
        <h1 className="text-sm dark:text-zinc-400 line-clamp-2">
          {project.description}
        </h1>
      </div>
    </div>
  );
}

export default Project;
