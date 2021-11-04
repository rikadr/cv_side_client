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
      <meta name="dscription" content="Portfolio page for Rikard Noer Dotzler"/>
      </Head>

      {/*<BGBox />*/}
      <BGBox />
      

      <main className="font-bread">
        <SirkelNavn />
        <ContentCardSplit id="skills" />

        <Image src="/public/images/designbig.jpg" alt="Design" width="1800" height="1200" className="" quality="25" />

        <ContentCardSplit />
        <ContentCardSplit />
      </main>

      

    </div>
  );
}
