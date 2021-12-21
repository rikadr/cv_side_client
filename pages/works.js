import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Link from "next/link";
import BGBox from "../components/BG/BGBox";
import ContentCardSplitPreview from "../components/ContentCard/ContentCardSplitPreview";


export default function Works() {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      {/*<BGBox />*/}
      <BGBox />

      <main className="container ">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="animate-pulse text-m">Works</h1>

            <Link href="/">
              <button
                className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-d font-bold py-2 px-4 rounded-lg ">
                Hjem
              </button>
            </Link>
          </div>
          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Aqua-Tech nettsted">
            WIP nettside utvikles utenom studiet med to medstudenter (Fredrik og Peder).
            React front end, nest backend hostet på AWS. <br/><br/>
            Min rolle i prosjektet: Design og grafikk. <br/>
            (Oppdatert design til forside, klikk "Designs")<br/>

            <Link href="https://www.gitta.no/" passHref>
              <a target="_blank">
                <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
                  Visit page
                </button>
              </a>
            </Link> 
            &nbsp;&nbsp;
            <Link href="https://drive.google.com/file/d/1NYVpMH6QACpK-FMMgqksFYujQ2A_WzBG/view?usp=sharing">
              <a target="_blank">
                <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
                  Design
                </button>
              </a>
            </Link>
          </ContentCardSplitPreview>

          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Eksamen - SØPL">
            Eksamensprosjekt høst 2020 i faget "Webutvikling og inkluderende design".
            Ingen rammeverk var tillatt, kun ren HTML, CSS og enkel JavaScript. <br/><br/>
            Karakter: A <br/><br/>
            Min rolle i prosjektet: Design, foto/illustrasjon, delt ansvar for front end utvikling.<br/>

            <Link href="https://fredrikoh92.github.io/Final_Project_18/index.html">
              <a target="_blank">
                <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
                  Visit page
                </button>
              </a>  
            </Link>
          </ContentCardSplitPreview>

          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Personlig side">
            WIP personlig CV-side og portfolio for meg som voksende designer og utvikler.
            Alt arbeid med siden er utført av meg.<br/>
            (Veldig tidlig fase av utvikling, oppdateringer lanseres fortløpende)<br/>

            <Link href="/">
              <a target="_blank">
                <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
                  Home
                </button>
              </a>  
            </Link>
          </ContentCardSplitPreview>


          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Responsive design øvelse">
            Et studieprosjekt i faget "Webutvikling og inkluderende design" i responsive design. Mockup designet av meg.

            <br/>
            <Link href="https://drive.google.com/file/d/1Re_8nvKRIk7JVfv2gQRolrTqanpJOIV1/view?usp=sharing">
                <a target="_blank">
                  <button className="relative transition duration-200 bg-yellow-500 hover:bg-green-400 active:bg-green-700 text-white text-b font-bold px-3 py-1 my-4 rounded-lg ">
                    Design
                  </button>
                </a>  
              </Link>
          </ContentCardSplitPreview>

        </div>
      </main>
    </>
  );
}
