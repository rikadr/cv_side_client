import React from "react";
import Link from "next/link";
import SjekkMegUt from "./SjekkMegUt";


const SirkelNavn = () => {
  return (
    <div className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
      
      <div className="w-96 h-96 bg-red-200">
        <div class="bg-yellow-500 drop-shadow-lg rounded-full h-full w-full border-2 border-blue-600">
          <div className="my-20 border-2 border-green-600">
            <h1 className="font-titleItal text-lg  leading-12">
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
