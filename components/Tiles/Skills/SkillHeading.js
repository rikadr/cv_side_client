import React, { useRef, Children } from "react";
import IntersectEnter from "../../Intersect/IntersectEnter";


const SkillsHeading = ({heading, children }) => {

  
  return (
    <div className="h-16 sm:h-24">
        <IntersectEnter>
          <div className="h-full pt-[0.6rem] sm:pt-5 hover:animate-shake
                          bg-gradient-to-br from-yellow-300/60 to-yellow-400/80 rounded-xl drop-shadow-lg">
            <h2 className="font-titleItal font-semibold text-e sm:text-h text-center"> {children} </h2>
          </div>
        </IntersectEnter>
    </div>    
  );
};

export default SkillsHeading;