import React from "react";
import { useState } from "react";
import Link from "next/link";
import IntersectEnter from "../Intersect/IntersectEnter";

const SirkelNavn = () => {

  const Ord = ({tekst1, tekst2, style}) => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
      setVisible(!visible);
    }
    return (
      <div onMouseEnter={toggle} onMouseLeave={toggle}>
        <h1 className={`font-titleItal ${style} hover:animate-pulse hover:drop-shadow-lg shadow-red-500 ${visible ? '' : ''}`}>{visible ? tekst2 : tekst1}</h1>
      </div>
    )
  }

  const Boble = ({tekst, temp, bg1, bg2, url}) => {
    return (
      <div className="w-min border-0 border-red-600 rounded-full"><Link href={`${url}`}>
        <a><div className={`
        w-28 sm:w-32 h-28 sm:h-32 flex justify-center rounded-full 
        font-titleItal text-e sm:text-g hover:text-white hover:font-semibold
        bg-gradient-to-br ${bg1} ${bg2} hover:to-yellow-400/80 backdrop-filter backdrop-blur-sm shadow-lg hover:shadow-yellow-400/30`}>
            <div className="w-full h-full rounded-full m-auto text-center pt-8 sm:pt-9 hover:animate-shake">{tekst}
            <div className="absolute text-gray-100/50 text-r sm:text-v translate-x-[1.5rem] sm:translate-x-[1.8rem] -translate-y-[4.7rem] sm:-translate-y-[5.7rem]">{temp}</div>
            </div>
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
          <Ord tekst1="Rikard" tekst2="Designer" style="hover:text-emerald-300" />
          <Ord tekst1="Noer" tekst2="Web" style="hover:text-indigo-300" />
          <Ord tekst1="Dotzler" tekst2="Developer" style="hover:text-stone-400" />
        </div>

        <div className="w-[15rem] h-[29rem] m-auto pl-[2rem] border-0 border-blue-600">

          <div className="absolute ml-[1rem] ">
            <Boble tekst="About" bg1="from-lime-300/50 text-white" bg2="to-cyan-600/80 shadow-cyan-600/50 animate-float1"  url="/#about" />
          </div>

          <div className="absolute mt-[3.5rem] sm:mt-[4rem] ml-[5rem] ">
            <Boble tekst="Skills" bg1="from-green-300/40 text-white" bg2="to-sky-500/80 shadow-sky-500/50 animate-float1 animation-delay-1"  url="/#skills" />
          </div>

          <div className="absolute mt-[8.5rem] sm:mt-[9.5rem] ml-[1rem] sm:ml-[0rem] ">
            <Boble tekst="Works" bg1="from-violet-300/50 text-white" bg2="to-rose-500/80 shadow-rose-500/50 animate-float2"  url="/works" />
          </div>

          <div className="absolute mt-[14rem] sm:mt-[16rem] ml-[3rem] sm:ml-[3rem] ">
            <Boble tekst="Contact" temp="&#9888;" bg1="from-red-500/30" bg2="to-blue-200/80 shadow-blue-200/50 animate-float1 animation-delay-2"  url="" />
          </div>

        </div>
      </div>          

      <div className="absolute bottom-20 w-full">
        <Link href="/#about"><a><div className="w-min m-auto">Scroll</div></a></Link>
      </div>
    </div>
  );
};

export default SirkelNavn;
