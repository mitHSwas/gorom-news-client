import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../assets/images/Brand1 (1).png';
import Brand2 from '../../assets/images/Brand2.png';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;