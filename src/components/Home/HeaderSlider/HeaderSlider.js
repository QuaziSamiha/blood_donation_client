import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../../images/carousel-image1.jpg';
import Slider2 from '../../../images/carousel-image4.jpg';
import Slider3 from '../../../images/carousel-image5.jpg';

export default function HeaderSlider() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };

    return (
        <div className='pt-14 w-full mx-8'>
            <Slider {...settings}>
                <div className=''>
                    <img className='w-screen h-96' src={Slider1} alt="" />
                    <h1 className='text-center text-red-700 font-bold text-2xl pt-4'>Donate Blood, Save life</h1>
                </div>
                <div className=''>
                    <img className='w-screen h-96' src={Slider2} alt="" />
                    <h1 className='text-center text-red-700 font-bold text-2xl pt-4'>
                        Your Donation Can Bring Smile at Others Face
                    </h1>
                </div>
                <div className=''>
                    <img className='w-screen h-96' src={Slider3} alt="" />
                    <h1 className='text-center text-red-700 font-bold text-2xl pt-4'>
                        Donate Blood And Get Real Blessings
                    </h1>
                </div>
            </Slider>
        </div>
    )
}
