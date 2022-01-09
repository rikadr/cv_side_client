import React from "react";
import { useState } from "react";
import Link from "next/link";
import IntersectEnter from "../Intersect/IntersectEnter";

const SirkelNavn = () => {

  const Ord = ({tekst1, tekst2}) => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
      setVisible(!visible);
    }
    return (
      <div onMouseEnter={toggle} onMouseLeave={toggle}>
        <h1 className={`font-titleItal leading-12 ${visible ? 'text-white animate-pulse drop-shadow-lg' : ''}`}>{visible ? tekst2 : tekst1}</h1>
      </div>
    )
  }

  const Boble = ({tekst, wh, bg1, bg2, url}) => {
    return (
      <div className="w-min"><IntersectEnter><Link href={`${url}`}>
        <a><div className={`
        w-${wh} h-${wh} flex justify-center rounded-full 
        transform duration-150 text-d hover:text-white hover:font-semibold
        hover:animate-pulse bg-gradient-to-br ${bg1} ${bg2} backdrop-blur-sm drop-shadow-lg`}>
            <div className="w-min m-auto">{tekst}</div>
          </div></a>
      </Link></IntersectEnter></div>
    )
  }

  return (
    <div className="relative h-screen">
    
          <div className="
          flex flex-col justify-center 
          w-min text-t 
           border-red-500 border-2">
            <Ord tekst1="Rikard" tekst2="Designer"/>
            <Ord tekst1="Noer" tekst2="Web"/>
            <Ord tekst1="Dotzler" tekst2="Developer"/>
          </div>

          <Boble tekst="About" wh="32" bg1="to-pink-300/60" bg2="from-blue-500/80"  url="/#about" />
          

      <div className="absolute bottom-20">
        Scroll
      </div>
    </div>
  );
};

export default SirkelNavn;
