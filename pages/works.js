import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import Link from "next/link";
import BGBox from "../components/BG/BGBox";
import ContentCardSplitPreview from "../components/ContentCard/ContentCardSplitPreview";
import NavHomePlayground from "../components/Nav/NavHomePlayground";
import ButtonArrayContainer from "../components/ContentCard/ButtonArray/ButtonArrayContainer";
import ButtonArrayButton from "../components/ContentCard/ButtonArray/ButtonArrayButton";
import ButtonArrayButtonPreviewModal from "../components/ContentCard/ButtonArray/ButtonArrayButtonPreviewModal";


export default function Works() {
  return (
    <>
      <Head>
        <title>Works 2.0</title>
      </Head>
      {/*<BGBox />*/}
      

      <main className="">
        <div className="max-w-lg m-auto mt-5  grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <NavHomePlayground />
          <h1 className="w-48 h-32 pt-3 font-titleItal text-q stroke-current stroke-1 mt-0 md:mt-10">Works</h1>
        </div>

        
        

        <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Aqua-Tech nettsted">
          <p> WIP nettside utvikles utenom studiet med to medstudenter (Fredrik og Peder).
          React front end, nest backend hostet på AWS.</p>
          <br/>
          <p> Min rolle i prosjektet: Design og grafikk. <br/>
          (Oppdatert design til forside, klikk "Designs")</p>
          <br/>
          
          
          <ButtonArrayContainer>
            <ButtonArrayButton              text="Visit"  url="https://www.gitta.no/" />
            <ButtonArrayButton              text="Preview" url="" />
            <ButtonArrayButton              text="Design" url="https://drive.google.com/file/d/1NYVpMH6QACpK-FMMgqksFYujQ2A_WzBG/view?usp=sharing" />
          </ButtonArrayContainer>
          

        </ContentCardSplitPreview>


        
      </main>
    </>
  );
}
