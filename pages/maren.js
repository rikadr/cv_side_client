import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import MarenBobler from "../components/SirkelNavn/MarenBobler";



export default function Works() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Gratulerer Maren!</title>
      </Head>

      <MarenBobler/>
      
      
      
    </div>
  );
}
