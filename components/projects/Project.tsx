import { ProjectType } from "@/client/project.types";
import Image from "next/image";

function Project({ image, title, url }: ProjectType) {
  return (
    <div>
      <a href={url} target="_blank">
        <div className="relative h-72 rounded-lg overflow-hidden">
          <Image
            fill
            src={image}
            className="h-full w-full object-cover object-center hover:scale-110 duration-700 ease-in-out"
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
