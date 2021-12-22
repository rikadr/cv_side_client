import React, { useRef, Children } from "react";
import IntersectEnter from "../../Intersect/IntersectEnter";

const SkillItem = ({ type, imgURL, imgSize, padding }) => {

  

  return (
    <div className="h-48">
      <IntersectEnter>
        <div className="h-full text-c text-center bg-white rounded-3xl drop-shadow-lg p-2 ">
          <div className={`m-auto p-${padding} border-2 border-red-500`}>
          
              <img src={`images/skillLogos/${imgURL}.png`} className={`w-${imgSize} m-auto `} /></div>
              {type}
           
        </div>
      </IntersectEnter>
    </div>
  );
};

export default SkillItem;
