const schools = [
  {
    id: 1,
    title: "Frontend Software Developer (React | NextJS) at DevsNext LLC",
    subtitle: "April 1, 2022 - December 1, 2022",
    imgUrl: "devsnest.jpeg",
  },
];

type PositionType = {
  school: {
    id: number;
    title: string;
    subtitle: string;
    imgUrl: string;
  };
};

function Position({ school }: PositionType) {
  return (
    <div className="flex gap-5 items-center">
      <div className="bg-zinc-100 p-3 rounded-full">
        <img src={`/${school.imgUrl}`} className="w-10 h-10 shrink-0" alt="" />
      </div>

      <div>
        <p className="font-semibold">{school.title}</p>
        <p className="">{school.subtitle}</p>
      </div>
    </div>
  );
}

function Positions() {
  return (
    <div className="space-y-5">
      <h4 className={`text-xl font-semibold tracking-wider `}>Position</h4>

      <div className="space-y-4">
        {schools.map((school) => (
          <Position school={school} />
        ))}
      </div>
    </div>
  );
}

export default Positions;
