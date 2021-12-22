import React, { useRef, Children } from "react";

const SkillGroup = ({ children }) => { 
  return (
    <div className="flex flex-row gap-5 justify-center">
        {children}
    </div>    
  );
};

export default SkillGroup;