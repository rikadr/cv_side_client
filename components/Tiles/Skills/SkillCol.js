import React, { useRef, Children } from "react";

const SkillCol = ({ children }) => { 
  return (
    <div className="flex flex-col gap-5 w-48">
        {children}
    </div>    
  );
};

export default SkillCol;