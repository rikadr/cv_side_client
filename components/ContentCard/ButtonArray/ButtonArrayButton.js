import React, { Children } from "react";
import Link from "next/link";

const ButtonArrayButton = ({ text, url }) => { 
  return (
    <Link href={`${url}`}>
        <a target="_blank" className="w-min px-5 py-1 text-b sm:text-c transition duration-100 
                                    hover:text-white hover:font-semibold hover:bg-blue-400 hover:rounded-lg  border-blue-600 border-0">
            {text}
        </a>  
    </ Link>  
  );
};

export default ButtonArrayButton;