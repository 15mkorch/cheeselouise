import Head from 'next/head'
import Navbar from '../Components/Navbar';
import Form1 from '../Components/Form1';

export default function Contact() {
    return (
        <div id="contact-page">
            <Head>
                <title>Cheese Louise - Our Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id="contact-main">
                <div className='background'>
                    <h1>Contact Us</h1>
                    <h2> Book us for your next event, company celebration, or neighborhood block party!</h2>
                    <div className='formDiv'>
                        <Form1 />
                    </div>
                </div>
            </main>
        </div>
    )
}