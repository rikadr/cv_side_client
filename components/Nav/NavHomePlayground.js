import React from "react";
import IntersectEnter from "../Intersect/IntersectEnter";
import Link from "next/link";

const NavHomePlayground = () => {
  return (
    <div className="w-80 h-[9rem] md:w-[15rem] md:h-[14.5rem] font-titleItal text-g border-2 border-red-600">
      <Link href="/">
        <a className="absolute pl-[6.3rem] pt-3 md:pl-3 md:pt-24">
            <div
            className="w-52 h-28
                            text-white bg-blue-500 hover:bg-blue-600 rounded-full grid content-center justify-center drop-shadow-xl
                                "
            >
            Playground
            </div>
        </a>
      </Link>

      <Link href="/">
        <a className="absolute pl-[0.4rem] pt-3 md:pl-[6.8rem] md:pt-3 ">
          <div
            className="w-28 h-28 
                        bg-yellow-400 hover:bg-yellow-500 rounded-full grid content-center justify-center drop-shadow-xl"
          >
            Home
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavHomePlayground;
