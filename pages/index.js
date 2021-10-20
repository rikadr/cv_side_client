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
        <h1>Hello verden!</h1>
        <Link href="/about"><a className="text-blue-500">Her kan du se på mine posjekter jeg har deltatt i! B-)</a></Link>
      </main>
        
    </div>
  )
}
