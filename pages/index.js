import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from 'next/image'


import BGBox from "../components/BG/BGBox";
import SirkelNavn from "../components/SirkelNavn/SirkelNavn";
import Link from "next/link";
import ContentCardSplit from "../components/ContentCard/ContentCardSplit";

export default function Home() {
  return (
    <div className="bg-purple-300">
      {/* Kan bytte div med <Layout /> component jeg kan lage */}
      <Head>
      <title>Rikard Dotzler Portfolio</title>
      <meta name="description" content="Portfolio page for Rikard Noer Dotzler"/>
      </Head>

      {/*<BGBox />*/}
      <BGBox />
      

      <main className="font-bread">
        <SirkelNavn />
        <ContentCardSplit id="skills" image="designbig.jpg" alt="Design" q="100"/>
        <ContentCardSplit />
        <ContentCardSplit />
      </main>

      

    </div>
  );
}
