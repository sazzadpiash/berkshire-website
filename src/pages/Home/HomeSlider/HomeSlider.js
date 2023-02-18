import React from 'react';
import banner from "./../../../assets/images/banner.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Link } from 'react-router-dom';


const HomeSlider = () => {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                autoplay={false}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper rounded-t-lg"
            >
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674762574/slider1_mfwkx9.png' className='w-full relative' alt="" />
                    <div className='w-full text-left absolute z-10 top-28 left-20'>
                        <div className='w-2/5 bg-white py-16 px-10'>
                            <p className='text-4xl mb-3'>OUR MOST CUSTOMIZABLE BED YET</p>
                            <p>Choose from 3 headboard faces and upholster it to your liking.</p>
                        <Link to='/furniture/room/467' className='btn btn-primary text-white font-sans mt-3'>View Bed</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674763083/slider_bbl2s9.jpg" className='w-full relative' alt="" />
                    <div className='w-full text-left absolute z-10 top-28 right-20'>
                        <div className='w-2/5 ml-auto bg-white py-16 px-10'>
                            <p className='text-4xl mb-3'>OUR MOST CUSTOMIZABLE BED YET</p>
                            <p>Choose from 3 headboard faces and upholster it to your liking.</p>
                        <Link to='/furniture/room/467' className='btn btn-primary text-white font-sans mt-3'>View Bed</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674763083/slider_axgjhl.png" className='w-full relative' alt="" />
                    <div className='w-full text-left absolute z-10 top-28 right-20'>
                        <div className='w-2/5 ml-auto bg-white py-16 px-10'>
                            <p className='text-4xl mb-3'>OUR MOST CUSTOMIZABLE BED YET</p>
                            <p>Choose from 3 headboard faces and upholster it to your liking.</p>
                        <Link to='/furniture/room/467' className='btn btn-primary text-white font-sans mt-3'>View Bed</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeSlider;