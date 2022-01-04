import React, { Children } from "react";
import Link from "next/link";

const ButtonArrayButton = ({ text, url }) => { 
  return (
    <Link href={`${url}`}>
        <a target="_blank" className="w-full w370:w-min px-5 py-1 text-b sm:text-b text-center w370:text-left transition duration-100 rounded-lg
                                    hover:text-white hover:font-semibold hover:bg-blue-400  border-blue-600 border-0">
            {text}
        </a>  
    </ Link>  
  );
};

export default ButtonArrayButton;