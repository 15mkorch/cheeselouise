import Head from 'next/head'
import Navbar from '../Components/Navbar';

export default function Contact() {
    return (
        <div id="contact-page">
            <Head>
                <title>
                    Cheese Louise - Contact Us
                </title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <Form />
            </main>
        </div>
    )
}
