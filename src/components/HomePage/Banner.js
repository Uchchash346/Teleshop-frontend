import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/styles.css";
// import required modules
import { Pagination } from "swiper";

// Banner images
import bannerImage1 from '../images/banner_images/ts-1.png';
import bannerImage2 from '../images/banner_images/ts-2.jpg';

const Banner = () => {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src={bannerImage1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImage2} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;