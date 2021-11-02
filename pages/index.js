import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

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
      </Head>

      {/*<BGBox />*/}
      <BGBox />
      

      <main className="font-bread">
        <SirkelNavn />
        <ContentCardSplit />
        <ContentCardSplit />
        <ContentCardSplit />
      </main>

      

    </div>
  );
}
