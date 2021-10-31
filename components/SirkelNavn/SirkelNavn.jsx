import React from "react";
import Link from "next/link";
import SjekkMegUt from "./SjekkMegUt";


const SirkelNavn = () => {
  return (
    <div className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
      
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
        <div class="bg-yellow-500 drop-shadow-lg rounded-full h-full w-full 
        border-2">
          <div className="my-10 sm:my-14 md:my-20 mx-6 sm:mx-8 md:mx-12">
            <h1 className="font-titleItal text-n sm:text-p md:text-u leading-10 sm:leading-11 md:leading-12">
                  Rikard
                <br /> Noer
                <br /> Dotzler
            </h1>
                <SjekkMegUt />

          </div>
        </div>
      </div>
    </div>
  );
};

export default SirkelNavn;
