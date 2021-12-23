import React, { useRef, Children } from "react";
import IntersectEnter from "../../Intersect/IntersectEnter";

const SkillItem = ({ type, imgURL, padding }) => {

  

  return (
    <div className="h-48">
      <IntersectEnter>
        <div className="h-full text-c text-center bg-white rounded-3xl drop-shadow-lg p-2 ">
          <div className={`w-36 h-36 m-auto p-${padding}`}>
          
              <img src={`images/skillLogos/${imgURL}.png`} /></div>
              {type}
           
        </div>
      </IntersectEnter>
    </div>
  );
};

export default SkillItem;
