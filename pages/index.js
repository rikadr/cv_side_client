import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Rikard sin hjemmeside</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 class="animate-bounce w-6 h-6 ...">Yo</h1>
        <Link href="/about"><a className="text-blue-500 text-lg">Sjekk meg ut...</a></Link>
      </main>
        
    </div>
  )
}
