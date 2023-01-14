import { ChevronUpIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <div className="py-10 px-5 md:px-0 flex justify-between items-center">
      <p className="">Copyright © 2023 Ashik Rana</p>
      <div>
        <a href="#intro">
          <div className="p-2 rounded dark:bg-slate-700 bg-slate-300 cursor-pointer hover:scale-110 transition">
            <ChevronUpIcon className="h-5 w-5" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
