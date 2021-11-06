import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Link from "next/link";
import BGBox from "../components/BG/BGBox";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <BGBox />

      <main className="container ">
        <div>
          <div className="flex flex-col justify-center items-center h-screen text-m">
            <h1 className="animate-pulse">Contact</h1>

            <Link href="/">
              <button
                className="relative transition duration-200 bg-red-500 hover:bg-green-400 active:bg-green-700 text-white text-f font-bold py-2 px-4 rounded-lg "
              >
                Hjem
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
