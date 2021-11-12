import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Image from 'next/image'


import BGBox from "../components/BG/BGBox";
import SirkelNavn from "../components/SirkelNavn/SirkelNavn";
import ContentCardSplit from "../components/ContentCard/ContentCardSplit";
import ContentCardSplitText from "../components/ContentCard/ContentCardSplitText";
import IntersectEnter from "../components/Intersect/IntersectEnter";

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
        
        OBS! Følgende er kun skjermbilder av designet. Implementert design utvikles fortløpende.<br/><br/><br/>

        <IntersectEnter>
        <img id="about" src="images/placeholder/About mobile.jpg"  className="visible relative m-auto w-full sm:w-11/12 md:invisible md:absolute "/>
        </IntersectEnter>
        <IntersectEnter>
        <img src="images/placeholder/About desktop.jpg"  className="invisible absolute m-auto w-full md:visible md:relative lg:w-10/12 xl:w-8/12 2xl:w-1000"/>
        </IntersectEnter>

        <IntersectEnter>
        <img id="skills" src="images/placeholder/Skills mobile.jpg"  className="visible relative m-auto w-full sm:w-11/12 md:invisible md:absolute "/>
        </IntersectEnter>
        <IntersectEnter>
        <img src="images/placeholder/Skills desktop.jpg"  className="invisible absolute m-auto w-full md:visible md:relative lg:w-10/12 xl:w-8/12 2xl:w-1000"/>
        </IntersectEnter>


        

        
        

      </main>

      

    </div>
  );
}
