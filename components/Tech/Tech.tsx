import { TechTypes } from "./tech.types";

function Tech({ info }: { info: TechTypes }) {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img src={`/${info.image}`} className="h-5 w-5 rounded" alt="" />
      </div>
      <div className="text-sm">{info.name}</div>
      <p className="text-xs">{info.level}</p>
    </div>
  );
}

export default Tech;
