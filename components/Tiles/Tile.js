import React, { useRef } from "react";
import IntersectEnter from "../Intersect/IntersectEnter";

const Tile = ({heading, children }) => {

  
  return (
    <div className="my-8 w-full md:w-1/2">
      <IntersectEnter>

        <div className="w-full text-black drop-shadow-md">
          <h1 className="font-medium text-s text-center md:text-left font-titleItal"> {heading} </h1>
          {children}
        </div>    

      </IntersectEnter>
    </div>
  );
};

export default Tile;
