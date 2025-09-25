"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";


const Counter = () => {
  return (
    <section className="bg-[#20B486] max-sm:pt-10">
      <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10 py-10 relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
        >
          <SwiperSlide>
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl/5 font-semibold text-white text-center">
              10+
            </div>
            <div className="md:text-2xl sm:text-xl text-sm font-medium text-white text-center md:mt-3 mt-2">
              Years Of Experience
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl/5 font-semibold text-white text-center">
              790+
            </div>
            <div className="md:text-2xl sm:text-xl text-sm font-medium text-white text-center md:mt-3 mt-2">
              Universities Tie Ups
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl/5 font-semibold text-white text-center">
              100%
            </div>
            <div className="md:text-2xl sm:text-xl text-sm font-medium text-white text-center md:mt-3 mt-2">
              AI App Accuracy
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl/5 font-semibold text-white text-center">
              12340+
            </div>
            <div className="md:text-2xl sm:text-xl text-sm font-medium text-white text-center md:mt-3 mt-2">
              Success Stories
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Counter;