import React, { useRef, Children } from "react";

const TileAboutYellow = ({ children }) => {
    return (
        <div className="p-3 rounded-xl drop-shadow-lg text-b sm:text-c font-semibold bg-yellow-400 ">
           {children}
        </div>
    );
};

export default TileAboutYellow;