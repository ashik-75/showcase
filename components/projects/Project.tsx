import Link from "next/link";
import { ProjectType } from "./project.types";

function Project({ project }: { project: ProjectType }) {
  return (
    <div className="space-y-3">
      <Link href={project.link}>
        <div className="h-44 w-full overflow-hidden">
          <img
            src={`/${project.image}`}
            className="w-full h-full rounded hover:scale-125 transition"
            alt=""
          />
        </div>
      </Link>
      <h1 className="hover:underline cursor-pointer hover:underline-offset-2 font-semibold text-lg">
        {project.title}
      </h1>
      <h1 className="text-sm dark:text-zinc-400">{project.description}</h1>
    </div>
  );
}

export default Project;
