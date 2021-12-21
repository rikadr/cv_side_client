import React, { useRef } from "react";
import IntersectEnter from "../Intersect/IntersectEnter";

const Tile = ({heading, children }) => {

  
  return (
    <div className="my-2 md:my-5 w-full border-2 border-green-400">
      <IntersectEnter>
          {children}
      </IntersectEnter>
    </div>
  );
};

export default Tile;
