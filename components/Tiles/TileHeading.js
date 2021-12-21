import React, { useRef } from "react";


const TileHeading = ({ children }) => {
  return (
    <div className="my-5 w-full border-2 border-green-400 text-black drop-shadow-md">
        <h1 className="font-medium text-o sm:text-s text-center md:text-left font-titleItal"> {children} </h1>
    </div>
  );
};

export default TileHeading;
