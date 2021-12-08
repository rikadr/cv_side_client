import React, { useRef } from "react";
import IntersectEnter from "../Intersect/IntersectEnter";

const Tile = ({ type, children }) => {
  
  return (
    <IntersectEnter>
      <div className="bg-yellow-400 rounded-xl m-3 p-3 text-black drop-shadow-md">
          
        {children}
      </div>    
    </IntersectEnter>

  );
};

export default Tile;
