import React from "react";
import Image from "next/image";
import IntersectEnter from "../Intersect/IntersectEnter";

const ContentCardSplitText = ({id, title, heading}) => {
  return (
    <IntersectEnter>
      <div id={id} className="relative w-11/12 xl:w-card m-auto mt-10 mb-10 flex flex-col lg:flex-row items-center justify-center"> 
      {/* Ramme */}
        <div className="bg-gray-400 w-full lg:h-80 lg:w-1/2 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg drop-shadow-lg ">
          {/* Bilde-boks */}
          <div className="p-5 text-white font-bold">
              {/* Bilde */} 
              <h1 className="font-titleItal text-g">{title}</h1>
          </div>
        </div>
        <div className="bg-white w-full lg:h-80 lg:w-1/2 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg h-full drop-shadow-lg">
        {/* Innhold-boks */}
          <div className="p-5 text-black ">
          {/* Innhold */}
            <h1 className="font-titleItal text-g">{heading}</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br/>
          </div>
        </div>
      </div>
    </IntersectEnter>
  );
};

export default ContentCardSplitText;
