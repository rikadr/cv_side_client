import React, { useRef, Children } from "react";

const TileAboutYellow = ({ children }) => {
    return (
        <div className="p-3 rounded-xl text-b sm:text-c font-semibold bg-yellow-400 ">
           {children}
        </div>
    );
};

export default TileAboutYellow;