import React, { Children } from "react";
import Link from "next/link";

const ButtonArrayContainer = ({ children }) => { 
  return (
    <div className="w-min m-auto sm:m-0 py-1 w370:py-0 bg-gradient-to-br from-yellow-200/50 to-yellow-400 rounded-full shadow-lg
                    grid grid-rows-3 w370:grid-rows-1 grid-flow-col gap-0">
        {children}
    </div>    
  );
};

export default ButtonArrayContainer;