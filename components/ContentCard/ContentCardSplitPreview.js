import React, { Children } from "react";
import Image from "next/image";
import IntersectEnter from "../Intersect/IntersectEnter";

const ContentCardSplitPreview = ({ id, image, alt, q, heading, children}) => {



  return (
    <IntersectEnter>
      <div
        id={id}
        className="relative w-11/12 xl:w-card m-auto mt-10 mb-10 flex flex-col lg:flex-row items-center justify-center"
      >
        {/* Ramme */}
        <div className="bg-gray-400 w-full h-56 lg:h-80 lg:w-1/2 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg drop-shadow-lg ">
          {/* Bilde-boks */}
          <div className="p-5 text-white font-bold">
            {/* Bilde */}
            <Image
              src={`/images/${image}`}
              alt={alt}
              quality={q}
              layout="fill"
              className="rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg" 
            />
          </div>
        </div>
        <div className="bg-white w-full lg:h-80 lg:w-1/2 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg h-full drop-shadow-lg">
          {/* Innhold-boks */}
          <div className="p-5 text-black ">
            {/* Innhold */}
            <h1 className="font-titleItal text-g">{heading}</h1>
            {children}
            {/*<br />
            <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
              Preview
            </button> &nbsp;&nbsp;
            <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
              Visit &#10230;
            </button>*/}
          </div>
        </div>
      </div>
      </IntersectEnter>
  );
};

export default ContentCardSplitPreview;
