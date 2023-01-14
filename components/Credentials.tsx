const schools = [
  {
    id: 1,
    title: "BSc. in Institute of Information Technology (IIT)",
    link: "https://juniv.edu/",
    subtitle: "Jahangirnagar University . April 2016 - april 2022",
    imgUrl: "ju-logo.png",
  },
  {
    id: 2,
    title: "Higher Secondary School Certificate",
    link: "https://juniv.edu/",
    subtitle: "Shah Sultan College . January 2014 - November 2015",
    imgUrl: "shahlogo.jpeg",
  },
];

type SchoolType = {
  school: {
    id: number;
    title: string;
    subtitle: string;
    link: string;
    imgUrl: string;
  };
};

function Credential({ school }: SchoolType) {
  return (
    <div className="flex gap-5 items-center">
      <div className="bg-zinc-100 p-3 rounded-full">
        <img src={`/${school.imgUrl}`} className="w-10 h-10" alt="" />
      </div>

      <div>
        <p className="font-semibold ">{school.title}</p>
        <p className="">{school.subtitle}</p>
      </div>
    </div>
  );
}

function Credentials() {
  return (
    <div className="space-y-5">
      <h4 className={`text-xl font-semibold tracking-wider `}>Credentials</h4>

      <div className="space-y-4">
        {schools.map((school) => (
          <Credential school={school} />
        ))}
      </div>
    </div>
  );
}

export default Credentials;
