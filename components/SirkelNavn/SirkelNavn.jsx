import React from "react";
import Link from "next/link";
import SjekkMegUt from "./SjekkMegUt";

const SirkelNavn = () => {
  return (
    <div className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
      <div class="bg-yellow-500 drop-shadow-lg rounded-full h-80 w-80 flex-col items-center justify-center border-2 border-blue-600">
        
        <h1 className="font-titleItal text-lg  leading-12 border-2 border-green-600">
            Rikard
          <br /> Noer
          <br /> Dotzler
        </h1>

        <div className="border-2 border-green-600">
          <SjekkMegUt />
        </div>

        <br />
      </div>
    </div>
  );
};

export default SirkelNavn;
