import Head from 'next/head'
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
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
                    <h1>Photos</h1>
                    <div className="grid">
                        <img className='photo' src="/images/Slide1.jpg" />
                        <img className='photo' src="/images/Slide5.jpg" />
                        <img className='photo' src="/images/Slide2.jpg" />
                        <img className='photo' src="/images/Slide3.jpg" />
                        <img className='photo' src="/images/Slide4.jpg" />
                        <img className='photo' src="/images/Slide6.jpg" />
                    </div>
                    <Carousel />
                </div>

            </main>
        </div>

    )
}



