import React, { useRef, Children } from "react";

const TileAbout = ({ heading, children }) => {
    return (
        <div className="p-3 rounded-xl drop-shadow-lg text-a sm:text-b bg-white">
           <h3 className="text-c"> {heading} </h3>
           {children}
        </div>
    );
};

export default TileAbout;