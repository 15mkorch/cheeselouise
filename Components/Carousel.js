import { Carousel } from 'react-bootstrap';

export default function CarouselItem() {
    return (
        <Carousel id='carousel'>
            <Carousel.Item>
                <div className="item">
                    <h3>This is a fake review!</h3>
                    <p>Before you make this website public, make sure you add some real reviews here! That would be embarassing if a customer read this.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="item">
                    <h3>Fake review - continued</h3>
                    <p>In fact, if you are a normal person reading this review, PLEASE contact the owners! lol</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="item">
                    <h3>Fake review - conclusion</h3>
                    <p>Also, I would love to hear your opinion on the typical heights of coffee tables. Do you think there should be more regulations in place to ensure coffee tables meet convenience expectations?</p>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}