"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-5 flex justify-between backdrop-blur-lg sticky top-0 left-0 w-full bg-slate-900/70 border-b border-slate-800  z-[99]">
      <div className="flex gap-3 items-center">
        <Bars3Icon
          onClick={() => setIsOpen(true)}
          className="h-7 w-7 text-zinc-400 block md:hidden"
        />

        <Link href={"/"}>
          <div className="font-semibold text-xl">Sweet Rana</div>
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <ul className=" gap-8 hidden md:flex">
          <a href={"#about"}>
            <li>About</li>
          </a>
          <a href={"#experience"}>
            <li>Experience</li>
          </a>
          <a href={"#skill"}>
            <li>Skill</li>
          </a>
          <a href={"#projects"}>
            <li>Projects</li>
          </a>
        </ul>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Header;
