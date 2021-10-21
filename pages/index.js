import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Rikard sin hjemmeside</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div class="filter drop-shadow-lg rounded-full h-80 w-80 flex-col items-center justify-center bg-red-300  ">
          <h1 className="animate-bounce w-6 h-6 ...">&#8482;</h1>
          <h1 className="font-titleItal text-lg leading-12">
            Rikard
            <br /> Noer
            <br /> Dotzler
          </h1>
          <Link href="/about">
            <a className=" transition duration-300 translate-x-40 hover:animate-pulse hover:text-red-500 text-black-900 text-s leading-10"> &#8594; Sjekk meg ut...</a>
          </Link>
          
        </div>
      </main>
    </div>
  );
}
