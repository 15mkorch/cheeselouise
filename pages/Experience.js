import Head from 'next/head'
import Navbar from '../Components/Navbar';
//import Carousel1 from '../Components/Carousel';

export default function Experience() {
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
            <main id="experience-main">
                <Navbar />
                <div className='background'>
                    <h1>test</h1>
                    <div className="grid">
                        <div className="card">
                            <img className='photo' src="/images/Slide1.jpg" />
                            <h3>The Classic $4</h3>
                            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
                            <p>Cheddar cheese on sour dough</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}



