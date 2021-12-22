import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Image from 'next/image'


import BGBox from "../components/BG/BGBox";
import SirkelNavn from "../components/SirkelNavn/SirkelNavn";
import ContentCardSplit from "../components/ContentCard/ContentCardSplit";
import ContentCardSplitText from "../components/ContentCard/ContentCardSplitText";
import IntersectEnter from "../components/Intersect/IntersectEnter";
import Tile from "../components/Tiles/Tile";
import TileAbout from "../components/Tiles/TileAbout";
import TileAboutYellow from "../components/Tiles/TileAboutYellow";
import TileHeading from "../components/Tiles/TileHeading";



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
        
        

        OBS! Nå har jeg revertert til tidligere versjon.<br/>
        Lagt til Tile componenter<br/><br/>

        <div id="about" className="flex flex-wrap flex-row justify-center m-auto w830:w-830 ">
          <div className="aboutFlexbox md:w-6/12  hidden md:block">
            <Tile >
                <img id="about" src="images/placeholder/FullBodyPortrait.jpg" className="hidden m-auto  max-w-5 rounded-full md:block"/>
            </Tile>
          </div>

          {/* TILE-FRAME */}  
          {/* className="flex flex-wrap flex-col justify-between m-auto border-2 border-green-300 w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-1000" */}

          <div className="aboutFlexbox flex flex-wrap flex-col w-10/12  md:w-6/12 ">  
          <Tile>
            <TileHeading>
                About Me
            </TileHeading>
          </Tile>    
          
            <Tile >
              <img id="about" src="images/placeholder/TorsoPortrait.jpg" className="block md:hidden m-auto w-11/12 rounded-full "/>
            </Tile>

            <Tile >
              <TileAboutYellow>
                Engasjert og motivert IT-student med bakgrunn i grafisk design.
              </TileAboutYellow>
            </Tile>

            <Tile >
              <TileAbout heading="STUDENT">
                <p>Studerer informasjonsteknologi <a className="underline hover:text-yellow-400" href="https://www.oslomet.no/studier/tkd/informasjonsteknologi" target="_blank">&#128712;</a> bachelor på OsloMet ved siden av diverse nettkurs på front end utvikling. </p>
                <br/><p>Jeg har også en bachelor som grunnskolelærer i matematikk og naturfag.</p>
              </TileAbout>
            </Tile>

            <Tile >
              <TileAbout heading="FRITID">
                <p>På siden er jeg aktiv trommeslager i band og musikkprodusent. </p>
                <br/><p>Jeg har også en bachelor som grunnskolelærer i matematikk og naturfag.</p>
              </TileAbout>
            </Tile>          
          </div>
        </div>


        {/*
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
        */}

      </main>

    </div>
  );
}
