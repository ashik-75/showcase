import { CodeBracketIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="space-y-5 scroll-mt-32" id="intro">
      <div>
        <h1 className="text-2xl font-semibold">Ashik Rana</h1>
        <div className="flex gap-2 items-center">
          <div className="text-sm ">ashikex49@gmail.com</div>
          <p className="">.</p>
          <div className="flex gap-2">
            <MapPinIcon className="icon" />
            <p className="text-sm ">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* intro */}

      <div className="max-w-xl">
        Frontend Software Developer , love to working with React and Next js.
        Have a experience to work with GraphQl and REST Api. also working with
        CMS (Sanity | Contentfull | Wordpress)
      </div>

      {/* tag */}

      <div className="flex gap-2 max-w-xl flex-wrap">
        {[
          {
            title: "Software Engineer",
            icon: <CodeBracketIcon />,
            color: "text-rose-400",
            id: 1,
          },
          {
            title: "React Developer",
            icon: <CodeBracketIcon />,
            color: "text-rose-600",
            id: 2,
          },
          {
            title: "NextJS Developer",
            icon: <CodeBracketIcon />,
            color: "text-purple-600",
            id: 2,
          },
          {
            title: "JAMStack Developer",
            icon: <CodeBracketIcon />,
            color: "text-teal-700",
            id: 3,
          },
          {
            title: "Frontend Developer",
            icon: <CodeBracketIcon />,
            color: "text-orange-700",
            id: 3,
          },
        ].map((position) => {
          const Icon = position?.icon;
          const color = position.color;
          return (
            <div
              className="px-3 py-1 text-sm rounded-full dark:bg-slate-800 bg-slate-200 flex gap-2 whitespace-nowrap"
              key={position.id}
            >
              <CodeBracketIcon className={`icon ${color}`} />
              <span>{position.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
