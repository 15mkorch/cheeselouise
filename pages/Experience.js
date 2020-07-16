import Head from 'next/head'
import Navbar from '../Components/Navbar';
import CarouselItem from '../Components/Carousel';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Experience() {
    const [photos, setPhotos] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:1337/photos').then((res) => {
            setPhotos(res.data.Photos);
        }); 
    }, []);

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
                <h1 id="photos-title">Photos</h1>
                <div className="grid">
                    {photos.map((item) => <img className='photo' src={"http://localhost:1337"+item.url} />)}
                </div>
                <div id="divider"></div>
                <h1 id="reviews-title">Our Reviews</h1>
                <CarouselItem />
            </main>
        </div>
    )
}



