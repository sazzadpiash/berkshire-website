import React from 'react';
import banner from "./../../../assets/images/banner.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";


const HomeSlider = () => {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper rounded-t-lg"
            >
                <SwiperSlide>
                    <img src='https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674762574/slider1_mfwkx9.png' className='w-full' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674763083/slider_bbl2s9.jpg" className='w-full' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1674763083/slider_axgjhl.png" className='w-full' alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeSlider;