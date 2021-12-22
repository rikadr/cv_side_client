import React, { useRef, Children } from "react";
import IntersectEnter from "../../Intersect/IntersectEnter";

const SkillItem = ({ type, padding }) => {
  return (
    <div className="h-48">
      <IntersectEnter>
        <div className="h-full text-c text-center bg-white rounded-3xl drop-shadow-lg p-3 ">
          <div className={`h-36 w-36 m-auto p-${padding}`}>
            <img src={`images/skillLogos/${type}.png`}
                className="" />
          </div>
          {type}
        </div>
      </IntersectEnter>
    </div>
  );
};

export default SkillItem;
