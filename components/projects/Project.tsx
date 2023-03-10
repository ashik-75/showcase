import { ProjectType } from "@/client/project.types";

function Project({ image, title, url }: ProjectType) {
  return (
    <div>
      <a href={url} target="_blank">
        <div className=" h-72 rounded-lg overflow-hidden">
          <img
            src={image}
            className="h-full w-full object-cover object-center hover:scale-110 transition-all"
            alt=""
          />
        </div>
      </a>

      <div className="mt-5">
        <h1 className="font-bold">{title}</h1>
        <a
          className="underline underline-offset-2"
          target={"_blank"}
          href={url}
        >
          visit here
        </a>
      </div>
    </div>
  );
}

export default Project;
