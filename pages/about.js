import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Head>
                <title>About page</title>
            </Head>

            <main className="container">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1>Hello</h1>
                    <Link href="/"><a className="text-blue-500">Back to home</a></Link>
                </div>
            </main>
        </>
    );
}