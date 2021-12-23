import React, { useRef, Children } from "react";
import IntersectEnter from "../../Intersect/IntersectEnter";

const SkillItem2Lines = ({ type, imgURL, padding }) => {

  

  return (
    <div className="h-48">
      <IntersectEnter>
        <div className="h-full text-c text-center bg-white rounded-3xl drop-shadow-lg p-2 ">
          <div className={`w-36 h-36 m-auto p-${padding} -translate-y-4`}>
          
              <img src={`images/skillLogos/${imgURL}.png `} /></div>
              <p className="-translate-y-9" >{type}</p>
           
        </div>
      </IntersectEnter>
    </div>
  );
};

export default SkillItem2Lines;
