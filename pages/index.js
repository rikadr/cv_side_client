import Head from "next/head";
import Link from "next/link";
import BackdropSlit from "../comps/BackdropSlit";



export default function Home() {
  return (
    <div className=""> {/* Kan bytte div med <Layout /> component jeg kan lage */}
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

      
      
      <div className="ackdropGrid ">
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
        <BackdropSlit />
      </div>

      <main className="relative z-40 flex flex-col items-center justify-center min-h-screen py-2 border-2 border-green-400">
        <div class="bg-yellow-200 drop-shadow-lg rounded-full h-80 w-80 flex-col items-center justify-center">
          <h1 className="animate-beat w-6 h-6 text-xs ">
            &#10022;
          </h1>
          <h1 className="font-titleItal text-lg leading-12">
            Rikard
            <br /> Noer
            <br /> Dotzler
          </h1>
          <Link
            href="/about"
            className="bg-clip-text"
          >
            <a className="transition duration-300 hover:animate-pulse hover:text-gray-500 text-black-900 text-s font-bread leading-10 hover:font-bold">
              &#8594; Sjekk meg ut...
            </a>
          </Link>
          <br />
        </div>
      </main>
    </div>
  );
}
