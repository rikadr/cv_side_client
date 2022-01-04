import React, { Children } from "react";
import Link from "next/link";

const ButtonArrayContainer = ({ children }) => { 
  return (
    <div className="w-min m-auto sm:m-0 bg-yellow-400 rounded-md shadow-lg
                    grid grid-rows-1 grid-flow-col gap-0">
        {children}
    </div>    
  );
};

export default ButtonArrayContainer;