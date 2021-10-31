import React from "react";
import Link from "next/link";

const SjekkMegUt = () => {
    return (
      <div>
          <Link href="/about">
            <a className="transition duration-300 hover:animate-pulse hover:text-gray-500 
            text-black-900 text-d sm:text-e font-bread leading-10 hover:font-bold">
              &nbsp; 
              <span className="invisible sm:visible text-a sm:text-e"> 
              &#8594; </span> Sjekk meg ut
            </a>
          </Link>
      </div>
    );
  };
  
  export default SjekkMegUt;
  