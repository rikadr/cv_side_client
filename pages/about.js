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
                    <h1>Portifolije</h1>
                    <a href="https://fredrikoh92.github.io/Final_Project_18/index.html" className="text-blue-500">SØPL</a>
                    <a href="gitta.tech" className="text-blue-500">Aqua-Tech</a>
                    <Link href="/"><a className="text-blue-500">Dersom du vil tilbake til hjemmesiden min så kan du klikke på denne setningen (-:</a></Link>
                </div>
            </main>
        </>
    );
}