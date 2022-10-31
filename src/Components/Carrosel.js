import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import img1 from '../assets/feedback1.jpeg';
import img2 from '../assets/feedback2.jpeg';
import img3 from '../assets/feedback3.jpeg';
import img4 from '../assets/feedback4.jpeg';
import img5 from '../assets/feedback5.jpeg';
import img6 from '../assets/feedback6.jpeg';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="feedback" /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt="feedback" /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="feedback" /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="feedback" /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt="feedback" /> </SwiperSlide>
        <SwiperSlide> <img src={img6} alt="feedback" /> </SwiperSlide>
      </Swiper>
    </>
  );
}