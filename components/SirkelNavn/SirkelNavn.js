import React from "react";
import Link from "next/link";
import SjekkMegUt from "./SjekkMegUt";


const SirkelNavn = () => {
  return (
    <div className="relative z-40 flex flex-col items-center justify-center h-screen py-2">
      
      <div className="w-72 h-mtall sm:w-96 sm:h-tall mb-16">
        <div className="transition duration-300 ease-in-out bg-yellow-400 hover:bg-yellow-500 drop-shadow-lg rounded-full h-full w-full 
        border-2">
          <div className="my-14 sm:my-20 mx-8 sm:mx-12">
            <h1 className="font-titleItal text-p sm:text-u leading-11 sm:leading-12">
                  Rikard
                <br /> Noer
                <br /> Dotzler
            </h1>
                <SjekkMegUt />
          </div>
        </div>
      </div>
      <div className="absolute bottom-20">
        Scroll
      </div>
    </div>
  );
};

export default SirkelNavn;
