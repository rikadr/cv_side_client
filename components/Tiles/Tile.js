import React, { useRef, Children } from "react";
import IntersectEnter from "../Intersect/IntersectEnter";

const Tile = ({heading, children }) => {

  
  return (
    <div className="my-2 md:my-5 w-full ">
      <IntersectEnter>
          {children}
      </IntersectEnter>
    </div>
  );
};

export default Tile;
