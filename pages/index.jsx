import React, { useEffect, useRef, useState } from 'react';
import Head from "next/head";

import BGBox from "../components/BGBox";
import SirkelNavn from "../components/SirkelNavn";
import Link from "next/link";



export default function Home() {
  return (
    <div className=""> {/* Kan bytte div med <Layout /> component jeg kan lage */}
      <Head>
        <title>Rikard Dotzler Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <BGBox />
      <SirkelNavn />
      
      <main className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
      
      </main>
    </div>
  );
}
