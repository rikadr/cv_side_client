import React from "react";
import Link from "next/link";
import SjekkMegUt from "./SjekkMegUt";

const SirkelNavn = () => {
  return (
    <div className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
      <div className="w-300px h-300px bg-red-500">

        <div class="z-10 bg-yellow-500 drop-shadow-lg rounded-full h-52 w-52 flex-col items-center justify-center border-2 border-blue-600"></div>
        <div className="z-40">
          {/*<h1 className="font-titleItal text-lg  leading-12 border-2 border-green-600">
                Rikard
              <br /> Noer
              <br /> Dotzler
  </h1>*/}

            <div className="border-2 border-green-600">
              <SjekkMegUt />
            </div>
          </div>
      </div>
    </div>
  );
};

export default SirkelNavn;
