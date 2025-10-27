"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function LogoSlider() {
  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          scale: 1,
          slideShadows: false,
        }}
        className="w-full max-w-xs  mx-auto"
      >
        <SwiperSlide className="!w-auto flex justify-center">
          <img
            src="/iso.png"
            alt="ISO"
            className="md:h-16 h-12 w-full transition-transform duration-500"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-auto flex justify-center">
          <img
            src="/satymay.png"
            alt="Gov"
            className="md:h-16 h-12 w-full transition-transform duration-500"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-auto flex justify-center">
          <img
            src="/startupindia.png"
            alt="Startup India"
            className="md:h-16 h-12 w-full transition-transform duration-500"
          />
        </SwiperSlide>
         <SwiperSlide className="!w-auto flex justify-center">
          <img
            src="/iso.png"
            alt="ISO"
            className="md:h-16 h-12 w-full transition-transform duration-500"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-auto flex justify-center">
          <img
            src="/satymay.png"
            alt="Gov"
            className="md:h-16 h-12 w-full transition-transform duration-500"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-auto flex justify-center">
          <img
            src="/startupindia.png"
            alt="Startup India"
            className="md:h-16 h-12 w-full transition-transform duration-500"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
