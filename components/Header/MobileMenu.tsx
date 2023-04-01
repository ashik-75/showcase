import {
  BookmarkIcon,
  BriefcaseIcon,
  ClipboardDocumentIcon,
  HomeIcon,
  LightBulbIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React from "react";

type MenuOpenProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu(props: MenuOpenProps) {
  const handleCloseMenu = () => {
    props.setIsOpen(false);
  };
  return (
    <div
      className={`w-full z-[9999] h-screen absolute top-0 ${
        props.isOpen ? "left-0" : "-left-[100vw]"
      } bg-slate-900 transition-all duration-200 p-10 space-y-5`}
    >
      <button onClick={handleCloseMenu}>
        <XMarkIcon className="h-7 w-7 text-zinc-500" />
      </button>
      <div>
        <ul className="flex flex-col gap-y-5">
          <a href="#" onClick={handleCloseMenu}>
            <li className="flex gap-2">
              <HomeIcon className="icon" />
              <span>Home</span>
            </li>
          </a>

          <a href="#about" onClick={handleCloseMenu}>
            <li className="flex gap-2">
              <BookmarkIcon className="icon" />
              <span>About</span>
            </li>
          </a>

          <a href="#experience" onClick={handleCloseMenu}>
            <li className="flex gap-2">
              <LightBulbIcon className="icon" />
              <span>Experience</span>
            </li>
          </a>

          <a href="#skill" onClick={handleCloseMenu}>
            <li className="flex gap-2">
              <BriefcaseIcon className="icon" />
              <span>Skill</span>
            </li>
          </a>

          <a href="#projects" onClick={handleCloseMenu}>
            <li className="flex gap-2">
              <ClipboardDocumentIcon className="icon" />
              <span>Projects</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
