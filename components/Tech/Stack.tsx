import Tech from "./Tech";
import { TechTypes } from "./tech.types";

type StackType = {
  title: string;
  data: TechTypes[];
};
function Stack(props: StackType) {
  return (
    <div className="space-y-5">
      <h1 className="font-semibold">{props.title}</h1>

      <div className="space-y-5">
        {props.data.map((dt) => (
          <Tech key={dt.id} info={dt} />
        ))}
      </div>
    </div>
  );
}

export default Stack;
