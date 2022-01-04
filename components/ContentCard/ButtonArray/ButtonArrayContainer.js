import React, { Children } from "react";
import Link from "next/link";

const ButtonArrayContainer = ({ children }) => { 
  return (
    <div className="w-min m-auto sm:m-0 py-1 w370:py-0 bg-yellow-400 rounded-md shadow-lg
                    grid grid-rows-3 w370:grid-rows-1 grid-flow-col gap-0">
        {children}
    </div>    
  );
};

export default ButtonArrayContainer;