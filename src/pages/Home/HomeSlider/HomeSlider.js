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
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeSlider;