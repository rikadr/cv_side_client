import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>About page</title>
            </Head>

            <main className="container ">
                <div > {/* class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal" */}
                    <div className="flex flex-col justify-center items-center h-screen text-lg">
                        <h1 class="animate-ping">WOW</h1>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-blue-500">Klikk her!</a>
                        {/* https://fredrikoh92.github.io/Final_Project_18/index.html */}
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-blue-500">Eller her!</a>
                        {/* https://www.gitta.tech */}
                        <Link href="/"><button class="transition delay-300 hover:animate-spin bg-red-500 hover:bg-green-400 active:bg-green-700 text-white text-lg font-bold py-2 px-4 rounded-lg hover:rounded-full">Hjem</button></Link>                        
                    </div>
                </div>
            </main>
        </>
    );
}