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
                        <h1 class="animate-pulse">WOW</h1>
                        
                        {/* <a href="https://fredrikoh92.github.io/Final_Project_18/index.html" className="text-blue-500">Klikk her!</a> */}
                        
                        {/* <a href="https://www.gitta.tech" className="text-blue-500">Eller her!</a> */}
                        <Link href="/"><button class="transition duration-200 transform hover:translate-x-40 hover:translate-y-40 hover: scale-50 
                        bg-red-500 hover:bg-green-400 active:bg-green-700 text-white text-lg font-bold py-2 px-4 hover:rounded-full rounded-lg ">Hjem</button></Link>                        
                    </div>
                </div>
            </main>
        </>
    );
}