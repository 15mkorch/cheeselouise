import Head from 'next/head'
import Navbar from '../Components/Navbar';
import Form1 from '../Components/Form1';

export default function Contact() {
    return (
        <div id="menu-page">
            <Navbar />
            <div className="container">
                <Head>
                    <title>Cheese Louise - Our Menu</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main id="menu-main">
                    <h1>Contact Us</h1>
                    <h2> Book us for your next event, company celebration, or neighborhood block party!</h2>

                    <Form1 />


                </main>
            </div>
        </div >
    )
}