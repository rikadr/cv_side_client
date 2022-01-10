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
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Works</title>
      </Head>
      {/*<BGBox />*/}
      

      <main className="">
        <div className="max-w-lg m-auto  grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <NavHomePlayground />
          <h1 className="w-48 h-32 pt-3 font-titleItal text-q stroke-current stroke-1 mt-0 md:mt-10">Works</h1>
        </div>

        
        

        <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Aqua-Tech nettsted">
          <p> WIP nettside utvikles utenom studiet med to medstudenter.
          React front end, nest backend hostet på AWS.</p>
          <br/>
          <p> Min rolle i prosjektet: Design og grafikk. <br/>
          (Oppdatert design til forside, klikk "Designs")</p>
          <br/>
          <ButtonArrayContainer>
            <ButtonArrayButton              text="Visit"  url="https://www.gitta.no/" />
            {/*<ButtonArrayButton              text="Preview"  url="/404" />*/}
            <ButtonArrayButton              text="Design" url="https://drive.google.com/file/d/1NYVpMH6QACpK-FMMgqksFYujQ2A_WzBG/view?usp=sharing" />
          </ButtonArrayContainer>
        </ContentCardSplitPreview>

        <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Eksamen - SØPL">
          <p> Eksamensprosjekt høst 2020 i faget "Webutvikling og inkluderende design".
            Ingen rammeverk var tillatt, kun ren HTML, CSS og enkel JavaScript. Karakter: A <br/><br/>
            Min rolle i prosjektet: Design, foto/illustrasjon, delt ansvar for front end utvikling.
            <br/></p>
          <br/>
          <ButtonArrayContainer>
            <ButtonArrayButton              text="Visit"  url="https://fredrikoh92.github.io/Final_Project_18/index.html" />
            {/*<ButtonArrayButton              text="Preview"  url="/404" />*/}
          </ButtonArrayContainer>
        </ContentCardSplitPreview>

        <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Personlig side">
          <p> WIP personlig CV-side og portefølje for meg som voksende designer og utvikler.
            Alt arbeid med siden er utført av meg.<br/><br/>
            (Tidlig fase av utvikling, oppdateringer lanseres fortløpende)<br/></p>
          <br/>
          <ButtonArrayContainer>
            <ButtonArrayButton              text="Visit"  url="/" />
            {/*<ButtonArrayButton              text="Preview"  url="/404" />*/}
          </ButtonArrayContainer>
        </ContentCardSplitPreview>

        <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="60" heading="Responsive design øvelse">
          <p> Et studieprosjekt i faget "Webutvikling og inkluderende design" i responsive design. 
            Mockup designet av meg.</p>
          <br/>
          <ButtonArrayContainer>
            {/*<ButtonArrayButton              text="Visit"  url="/404" />*/}
            {/*<ButtonArrayButton              text="Preview"  url="/404" />*/}
            <ButtonArrayButton              text="Design"  url="https://drive.google.com/file/d/1Re_8nvKRIk7JVfv2gQRolrTqanpJOIV1/view?usp=sharing" />
          </ButtonArrayContainer>
        </ContentCardSplitPreview>
        <div className="h-20"></div>

      </main>
    </div>
  );
}
