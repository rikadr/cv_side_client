import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Rikard Dotzler Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div id="backdropGrid" className="relative z-1 w-full">

        <div className="relative z-10 w-full min-h-screen bg-gray-300"></div>
        <div className="relative z-10 w-full h-10 bg-gray-400"></div>
        <div className="relative z-10 w-full h-10 bg-gray-300"></div>
        <div className="relative z-10 w-full h-10 bg-gray-400"></div>

      </div>

      <main className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-blue-500 ">
        <div class="bg-yellow-200 drop-shadow-lg rounded-full h-80 w-80 flex-col items-center justify-center border-2 border-green-500">
          <h1 className="animate-bounce w-6 h-6 text-xs border-2 border-green-500">
            &#10022;
          </h1>
          <h1 className="font-titleItal text-lg leading-12 border-2 border-green-500 ">
            Rikard
            <br /> Noer
            <br /> Dotzler
          </h1>
          <Link
            href="/about"
            className="bg-clip-text border-2 border-green-500"
          >
            <a className="transition duration-300 hover:animate-pulse hover:text-gray-500 text-black-900 text-s font-bread leading-10 hover:font-bold border-2 border-green-500">
              &#8594; Sjekk meg ut...
            </a>
          </Link>
          <br />
        </div>
      </main>
    </div>
  );
}
