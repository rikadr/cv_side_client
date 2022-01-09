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
        <h1 className={`font-titleItal  ${visible ? 'text-white animate-pulse drop-shadow-lg' : ''}`}>{visible ? tekst2 : tekst1}</h1>
      </div>
    )
  }

  const Boble = ({tekst, bg1, bg2, url}) => {
    return (
      <div className="w-min border-0 border-red-600 rounded-full"><Link href={`${url}`}>
        <a><div className={`
        w-28 sm:w-32 h-28 sm:h-32 flex justify-center rounded-full 
        font-titleItal text-e sm:text-g hover:text-white hover:font-semibold
        bg-gradient-to-br ${bg1} ${bg2} hover:to-yellow-400/80 backdrop-filter backdrop-blur-sm drop-shadow-lg`}>
            <div className="w-min m-auto">{tekst}</div>
          </div></a>
      </Link></div>
    )
  }

  return (
    <div className="relative h-screen ">
      <div className="w-full md:w-[37rem] lg:w-7/12 w1300:w-830 h-min md:h-5/6 m-auto border-violet-500 border-0 
                    grid grid-cols-1 md:grid-cols-2 items-center">  

        <div className="w-64 h-min text-s md:text-x leading-[4.5rem] md:leading-[6rem] m-auto md:m-0 pl-5 py-5 md:py-0 order-0 md:order-1
          border-red-500 border-0">
          <Ord tekst1="Rikard" tekst2="Designer"/>
          <Ord tekst1="Noer" tekst2="Web"/>
          <Ord tekst1="Dotzler" tekst2="Developer"/>
        </div>

        <div className="w-[15rem] h-[29rem] m-auto pl-[2rem] border-0 border-blue-600">

          <div className="absolute ml-[1rem] ">
            <Boble tekst="About" bg1="from-lime-300/50 text-white" bg2="to-cyan-600/80 animate-float1"  url="/#about" />
          </div>

          <div className="absolute mt-[3.5rem] sm:mt-[4rem] ml-[5rem] ">
            <Boble tekst="Skills" bg1="from-green-300/40 text-white" bg2="to-sky-500/80 animate-float1 animation-delay-1"  url="/#skills" />
          </div>

          <div className="absolute mt-[8.5rem] sm:mt-[9.5rem] ml-[1rem] sm:ml-[0rem] ">
            <Boble tekst="Works" bg1="from-violet-300/50 text-white" bg2="to-rose-500/80 animate-float2"  url="/works" />
          </div>

          <div className="absolute mt-[14rem] sm:mt-[16rem] ml-[3rem] sm:ml-[3rem] ">
            <Boble tekst="Contact" bg1="from-red-500/30" bg2="to-blue-200/80 animate-float1 animation-delay-2"  url="/404" />
          </div>

        </div>
      </div>          

      <div className="absolute bottom-20 w-full">
        <div className="w-min m-auto">Scroll</div>
      </div>
    </div>
  );
};

export default SirkelNavn;
