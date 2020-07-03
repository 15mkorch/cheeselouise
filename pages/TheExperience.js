import Head from 'next/head'
import Navbar from '../Components/Navbar';

export default function TheExperience() {
    return (
        <div id="experience-page">
            <Head>
                <title>
                Cheese Louise - Experience
                </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
            </main>
        </div>
    )
}
