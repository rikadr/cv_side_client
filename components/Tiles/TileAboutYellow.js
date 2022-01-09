import React, { useRef, Children } from "react";

const TileAboutYellow = ({ children }) => {
    return (
        <div className="p-3 rounded-xl drop-shadow-lg text-b sm:text-c font-semibold bg-gradient-to-br from-yellow-300/60 to-yellow-400/80 ">
           {children}
        </div>
    );
};

export default TileAboutYellow;