import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    title: "facebook",
    url: "https://www.facebook.com/ashikranasweet",
    icon: "facebook.png",
  },
  {
    id: 2,
    title: "github",
    url: "https://github.com/ashik-75",
    icon: "github.png",
  },
  {
    id: 3,
    title: "linkedin",
    url: "https://www.linkedin.com/in/ashik-rana-93285b223/",
    icon: "linkedin.png",
  },
  {
    id: 4,
    title: "twitter",
    url: "https://twitter.com/AshikRa49018627",
    icon: "twitter.png",
  },
];

type SocialType = {
  id: number;
  title: string;
  url: string;
  icon: string;
};

function Social(props: { media: SocialType }) {
  return (
    <Link href={props.media.url}>
      <div className="flex items-center space-x-3 px-3 py-1 bg-zinc-400/20 rounded">
        <img src={`/${props.media.icon}`} className="w-5 h-5" alt="" />
        <p className="text-sm">{props.media.title}</p>
      </div>
    </Link>
  );
}

function About() {
  return (
    <div className="space-y-3 scroll-m-20 max-w-4xl" id="about">
      <h1 className="font-semibold text-xl">About Me</h1>

      <p>
        First and foremost, I love writing code. Ever since writing my first
        program in C and manipulating it to produce the desired output, I have
        been obsessed with the idea of using software to solve practical
        problems. Software engineering is a never-ending puzzle that I am
        passionately engaged in solving. I believe in the power of programming
        to transform and improve the lives of people around the world.
      </p>
      <p>
        I am a strong engineering professional with a Bachelor of Science (BS)
        focused on Information Technology from Jahangirnagar University. For my
        first professional contract, I was given the opportunity to be a part of
        a front-end team in a mid-scale company.
      </p>

      <p>
        Skills/Interests: JavaScript, React, NextJs, TypeScript, Redux, Redux
        Thunk, Redux Toolkit, ReactQuery, SWR, TailwindCSS, ChakraUI, Bootstrap,
        PWA applications, StyledComponents, CSS, SCSS, SASS, LESS, Headless CMS,
        REST API, GraphQl, HTML, Git, Github, Linux, Windows, Heroku, Netlify,
        Vercel.
      </p>
      <p>
        I love to write code, explore documentation and take on new challenges.
      </p>

      <div className="flex gap-3 flex-wrap">
        {socialMedia.map((media) => (
          <Social media={media} key={media.id} />
        ))}
      </div>
    </div>
  );
}

export default About;
