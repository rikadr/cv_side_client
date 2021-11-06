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
          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="100" heading="Work 1"/>
          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="100" heading="Work 2"/>
          <ContentCardSplitPreview id="" image="designbig.jpg" alt="Design" q="100" heading="Work 3"/>
        </div>
      </main>
    </>
  );
}
