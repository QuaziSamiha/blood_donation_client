import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../../images/carousel-image1.jpg';
import Slider2 from '../../../images/carousel-image4.jpg';
import Slider3 from '../../../images/carousel-image5.jpg';

export default function HeaderSlider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className='pt-24'>
            <Slider {...settings}>
                <div>
                    <img className='w-full' src={Slider1} alt="" />
                </div>
                <div>
                    <img className='w-full' src={Slider2} alt="" />
                </div>
                <div>
                    <img className='w-full' src={Slider3} alt="" />
                </div>
            </Slider>
        </div>
    )
}
