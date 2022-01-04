import React, { Children } from "react";
import Image from "next/image";
import IntersectEnter from "../Intersect/IntersectEnter";
import Link from "next/link";

const ContentCardSplitPreview = ({ id, image, alt, q, heading, children}) => {



  return (
    <IntersectEnter>
      {/* Ramme */}
      <div id={id} className="relative w-11/12 md:w-[43rem] lg:w-11/12 xl:w-card m-auto mt-10 mb-10 flex flex-col lg:flex-row items-center justify-center font-bread md:border-0 border-red-600 lg:border-blue-600">
        {/* Bilde-boks */}
        <div className="bg-gray-400 w-full h-56 lg:h-80 lg:w-1/2 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg drop-shadow-lg border-0 border-green-600">
          {/* Bilde */}
          <div className="p-5 text-white font-bold">
            <Image
              src={`/images/${image}`}
              alt={alt}
              quality={q}
              layout="fill"
              className="rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg" 
            />
          </div>
        </div>

        {/* Innhold-boks */}
        <div className="bg-white w-full lg:h-80 lg:w-1/2 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg drop-shadow-lg border-0 border-blue-600">
          {/* Innhold */}
          <div className="p-5 text-black">
            
            <h1 className="text-f">{heading}</h1>
            {children}
            
          </div>
        </div>
      </div>
      </IntersectEnter>
  );
};

export default ContentCardSplitPreview;
