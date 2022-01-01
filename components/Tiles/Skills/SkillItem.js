import React, { useRef, Children } from "react";
import IntersectEnter from "../../Intersect/IntersectEnter";

const SkillItem = ({ type, imgURL, padding }) => {

  

  return (
    <div className="h-36 sm:h-48">
      <IntersectEnter>
        <div className="h-full text-b sm:text-c text-center bg-white rounded-3xl drop-shadow-lg p-2 ">
          <div className={`w-28 sm:w-36 h-28 sm:h-36 m-auto p-${padding} -translate-y-2 sm:-translate-y-0`}>
          
              <img src={`images/skillLogos/${imgURL}.png`} /></div>
              <p className="-translate-y-4 sm:-translate-y-0">{type}</p>
           
        </div>
      </IntersectEnter>
    </div>
  );
};

export default SkillItem;
