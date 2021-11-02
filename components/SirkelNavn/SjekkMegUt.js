import React from "react";
import Link from "next/link";

const SjekkMegUt = () => {
    return (
      <div>
        <br />
          <Link href="/">
            <a className="transition duration-150 hover:animate-pulse hover:text-white 
            text-black-900 text-d sm:text-e font-bread leading-9 hover:font-bold">
              &nbsp; <span className="invisible sm:visible text-a sm:text-e"> 
              &#8594; </span> Skills <br />
            </a>
          </Link>
          <Link href="/works">
            <a className="transition duration-150 hover:animate-pulse hover:text-white 
            text-black-900 text-d sm:text-e font-bread leading-9 hover:font-bold">
              &nbsp; <span className="invisible sm:visible text-a sm:text-e"> 
              &#8594; </span> Works <br />
            </a>
          </Link>
          <Link href="/contact">
            <a className="transition duration-150 hover:animate-pulse hover:text-white 
            text-black-900 text-d sm:text-e font-bread leading-9 hover:font-bold">
              &nbsp; <span className="invisible sm:visible text-a sm:text-e"> 
              &#8594; </span> Contact <br />
            </a>
          </Link>
      </div>
    );
  };
  
  export default SjekkMegUt;
  