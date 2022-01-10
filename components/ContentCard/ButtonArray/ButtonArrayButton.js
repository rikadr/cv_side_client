import React, { Children } from "react";
import Link from "next/link";

const ButtonArrayButton = ({ text, url }) => { 
  return (
    <Link href={`${url}`}>
        <a target="_blank" className="
        w-full w370:w-min px-5 py-1 text-b sm:text-b text-center w370:text-left transition duration-100 rounded-full
      hover:text-white hover:font-semibold hover:bg-gradient-to-br hover:from-blue-200/50 hover:to-cyan-300/80 hover:bg-blue-400  ">
            {text}
        </a>  
    </ Link>  
  );
};

export default ButtonArrayButton;