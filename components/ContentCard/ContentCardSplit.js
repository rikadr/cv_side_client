import React from "react";
import Image from "next/image";

const ContentCardSplit = ({id, image}) => {
  return (
    <div id={id} className="relative w-11/12 m-auto mt-10 mb-10 flex flex-col lg:flex-row items-center justify-center "> 
    {/* Ramme */}
        <div className="bg-gray-400 w-full lg:w-1/2 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg h-full drop-shadow-lg">
        {/* Tittel-boks */}
        <div className="p-5 text-white font-bold">
            {/* Innhold */}
            <h1 className="font-titleItal text-g">Tittel</h1> 
            <Image src={`images/ ${image}`} alt="Design" width="1800" height="1200" className="" quality="25" />
            <br/>
            </div>
        </div>
        <div className="bg-white w-full lg:w-1/2 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg h-full drop-shadow-lg">
        {/* Innhold-boks */}
            <div className="p-5 text-black">
            {/* Innhold */}
                <h1 className="font-titleItal text-g">Innhold</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br/>
            </div>
        </div>

    </div>
  );
};

export default ContentCardSplit;
