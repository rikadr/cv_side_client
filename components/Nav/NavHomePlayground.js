import React from "react";
import IntersectEnter from "../Intersect/IntersectEnter";
import Link from "next/link";

const NavHomePlayground = () => {
  return (
    <div className="w-80 h-[9rem] md:w-[15rem] md:h-[14.5rem] font-titleItal text-e sm:text-g">
      <Link href="/">
        <a className="absolute pl-[6.3rem] pt-6 sm:pt-3 md:pt-24 md:pl-3 ">
            <div
            className="w-48 h-24 sm:w-52 sm:h-28 text-white bg-blue-500 hover:bg-blue-600 rounded-full grid content-center justify-center drop-shadow-xl">
            Playground
            </div>
        </a>
      </Link>

      <Link href="/">
        <a className="absolute pl-[1.5rem] sm:pl-[0.5rem] pt-6 sm:pt-3 md:pl-[6.8rem]  ">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 bg-yellow-400 hover:bg-yellow-500 rounded-full grid content-center justify-center drop-shadow-xl">
            Home
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavHomePlayground;
