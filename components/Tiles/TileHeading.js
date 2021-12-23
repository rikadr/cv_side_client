import React, { useRef, Children } from "react";


const TileHeading = ({ children }) => {
  return (
    <div className="my-5 w-full  text-black drop-shadow-lg">
        <h1 className="font-medium text-o sm:text-s text-center md:text-left font-titleItal"> {children} </h1>
    </div>
  );
};

export default TileHeading;
