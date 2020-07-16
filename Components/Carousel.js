import { Carousel } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function CarouselItem() {

    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:1337/reviews').then((res) => {
            setReviews(res.data);
        }); 
    }, []);

    return (
        <Carousel id='carousel'>
            {reviews.map((item) => 
                <Carousel.Item>
                    <div className="item">
                        <h3>{item.Title}</h3>
                        <p>{item.Body}</p>
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    )
}