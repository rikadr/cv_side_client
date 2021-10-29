import React from 'react';
import Link from "next/link";

const SirkelNavn = () => {
    return (
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
            <div class="bg-yellow-500 drop-shadow-lg rounded-full h-80 w-80 flex-col items-center justify-center">
                
                <h1 className="animate-beat w-6 h-6 text-xs ">
                    &#10022;
                </h1>

                <h1 className="font-titleItal text-lg leading-12">
                    Rikard
                    <br /> Noer
                    <br /> Dotzler
                </h1>

                <Link
                    href="/about"
                >
                    <a className="transition duration-300 hover:animate-pulse hover:text-gray-500 text-black-900 text-s font-bread leading-10 hover:font-bold">
                    &#8594; Sjekk meg ut...
                    </a>
                </Link>

                <br />
            </div>
        </div>
    );
}

export default SirkelNavn;
