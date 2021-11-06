import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from 'next/image'


import BGBox from "../components/BG/BGBox";
import SirkelNavn from "../components/SirkelNavn/SirkelNavn";
import ContentCardSplit from "../components/ContentCard/ContentCardSplit";
import ContentCardSplitText from "../components/ContentCard/ContentCardSplitText";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Kan bytte div med <Layout /> component jeg kan lage */}
      <Head>
      <title>Rikard Dotzler Portfolio</title>
      <meta name="description" content="Portfolio page for Rikard Noer Dotzler"/>
      </Head>

      {/*<BGBox />*/}
      

      <main className="font-bread">
        <SirkelNavn />
        <ContentCardSplitText id="about" title="About Me" heading="Designer and Web Developer"/>
        <ContentCardSplit id="skills" image="designbig.jpg" alt="Design" q="100" heading="Skills"/>

      </main>

      

    </div>
  );
}
