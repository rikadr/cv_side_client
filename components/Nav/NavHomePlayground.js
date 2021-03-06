import React from "react";
import IntersectEnter from "../Intersect/IntersectEnter";
import Link from "next/link";

const NavHomePlayground = () => {
  return (
    <div className="w-80 h-[9rem] md:w-[15rem] md:h-[14.5rem] mt-5 font-titleItal text-e sm:text-g">
      <Link  href="">
        <a className="absolute pl-[6.3rem] pt-6 sm:pt-3 md:pt-24 md:pl-3 ">
          <div className="absolute text-gray-100/30 text-x translate-x-[4rem] -translate-y-3">&#9888;</div>
            <div
            className="w-48 h-24 sm:w-52 sm:h-28 text-white hover:font-semibold animate-float1 
                       bg-gradient-to-br from-green-400 to-blue-400 hover:to-yellow-400/80 backdrop-blur-sm 
                       rounded-full grid content-center justify-center shadow-xl shadow-blue-400/50 hover:shadow-yellow-400/30">
            <div className="absolute text-gray-100/30 text-u sm:text-x translate-x-[4rem] -translate-y-3">&#9888;</div>
            <div className="w-48 h-24 sm:w-52 sm:h-28 pt-6 text-center rounded-full hover:animate-shake">Playground</div>
            
            </div>
            
            
        </a>
      </Link>

      <Link href="/">
        <a className="absolute pl-[1.5rem] sm:pl-[0.5rem] pt-6 sm:pt-3 md:pl-[6.8rem]  ">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 animate-float2 text-white hover:font-semibold
                       bg-gradient-to-br from-violet-300/50 to-rose-400/80 hover:to-yellow-400/80 backdrop-blur-sm 
                       rounded-full grid content-center justify-center shadow-xl shadow-rose-400/50 hover:shadow-yellow-400/30">
            <div className="w-24 h-24 sm:w-28 sm:h-28 pt-[1.7rem] sm:pt-7 text-center rounded-full hover:animate-shake">Home</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NavHomePlayground;
