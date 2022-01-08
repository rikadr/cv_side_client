import React from "react";
import { useState } from "react";
import Link from "next/link";

const SirkelNavn = () => {

  const Ord = ({tekst1, tekst2}) => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
      setVisible(!visible);
    }
    return (
      <div onMouseEnter={toggle} onMouseLeave={toggle}>
        <h1 className={`font-titleItal  leading-12 ${visible ? 'text-white text-r drop-shadow-lg' : 'animate-pulse text-t'}`}>{visible ? tekst2 : tekst1}</h1>
      </div>
    )
  }

  return (
    <div className="relative h-screen">
    
          <div className="
          flex flex-col justify-center 
          w-[22rem] h-[25rem] p-10 rounded-full 
          bg-gradient-to-br from-indigo-500/70 to-pink-600/80 backdrop-blur-sm drop-shadow-lg border-red-500 border-0">
            <Ord tekst1="Rikard" tekst2="Designer"/>
            <Ord tekst1="Noer" tekst2="Web"/>
            <Ord tekst1="Dotzler" tekst2="Developer"/>
          </div>

          <Link href="/#about">
            <a className="
            w-32 h-32 p-7 rounded-full
            text-d leading-[1.5rem] hover:text-white hover:font-semibold hover:animate-pulse
            bg-gradient-to-br from-yellow-300/60 to-amber-600/70 backdrop-blur-sm drop-shadow-lg">
              &#10549; About
            </a>
          </Link>
          
          <div className="
          w-32 h-32 p-7 rounded-full
          text-d leading-[1.5rem]
          bg-gradient-to-br from-green-300/60 to-green-700/70 backdrop-blur-sm drop-shadow-lg">
            &#10549; Skills
          </div>

          <div className="
          w-32 h-32 px-6 pt-12 rounded-full
          text-d leading-[1.5rem]
          bg-gradient-to-br from-red-300/60 to-pink-700/70 backdrop-blur-sm drop-shadow-lg">
            Works
          </div>

      <div className="absolute bottom-20">
        Scroll
      </div>
    </div>
  );
};

export default SirkelNavn;
