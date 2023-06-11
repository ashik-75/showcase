"use client";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-10 px-5 md:px-0 flex justify-between items-center">
      <p className="">Copyright © 2023 Sweet Rana</p>
      <div>
        <>
          <div
            onClick={scrollToTop}
            className="p-2 rounded bg-slate-700 cursor-pointer hover:scale-110 transition"
          >
            <ChevronUpIcon className="h-5 w-5" />
          </div>
        </>
      </div>
    </div>
  );
}

export default Footer;
