import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Rikard sin hjemmeside</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <h1 className="animate-bounce w-6 h-6 ...">Yo</h1>
        <h1 className="font-titleItal text-lg">Rikard<br /> Noer<br /> Dotzler</h1>
        <Link href="/about"><a className="text-blue-500 text-m">Sjekk meg ut...</a></Link>
      </main>
        
    </div>
  )
}
