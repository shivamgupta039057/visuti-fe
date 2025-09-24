"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  return (
    <section className="md:py-16 py-10 max-sm:pb-0 max-w-7xl mx-auto lg:px-6 px-4 relative">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-3 md:mb-8 mb-5">
        <div>
          <div className="text-[#2B2B3D] font-semibold lg:text-6xl md:text-5xl sm:text-4xl text-3xl capitalize">
            Explore our{" "}
            <span className="font-bold text-[#20B486]"> Services</span>
          </div>
          <div className="md:font-medium md:text-base sm:text-sm text-xs text-[#9A98A9] sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-1">
          <div className="swiper-button-prev after:content-none bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:h-10 h-8 md:w-10 w-8 rounded-lg flex items-center justify-center cursor-pointer">
            <img src="/CaretLeft.png" alt="left" />
          </div>
          <div className="swiper-button-next after:content-none bg-[#20B486] [box-shadow:-4px_4px_20px_0px_#20B4861F] md:h-10 h-8 md:w-10 w-8 rounded-lg flex items-center justify-center cursor-pointer">
            <img src="/CaretRight.png" alt="right" />
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="myServiceSwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full p-5 [box-shadow:0px_0px_2px_0px_#00000026] bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition">
            <img
              src="/collegeview.png"
              alt="college"
              className="md:h-16 h-12 md:w-16 w-12"
            />
            <p className="text-[#1B1D1F] font-medium md:mt-5 mt-3 md:text-sm text-xs text-center">
              Colleges View
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full p-5 [box-shadow:0px_0px_2px_0px_#00000026] bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition">
            <img
              src="/Comparecollege.png"
              alt="college"
              className="md:h-16 h-12 md:w-16 w-12"
            />
            <p className="text-[#1B1D1F] font-medium md:mt-5 mt-3 md:text-sm text-xs text-center">
              Compare College
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full p-5 [box-shadow:0px_0px_2px_0px_#00000026] bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition">
            <img
              src="/NEETPredictor.png"
              alt="college"
              className="md:h-16 h-12 md:w-16 w-12"
            />
            <p className="text-[#1B1D1F] font-medium md:mt-5 mt-3 md:text-sm text-xs text-center">
              NEET Predictor
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="h-full p-5 [box-shadow:0px_0px_2px_0px_#00000026] bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition">
            <img
              src="/DocumentsBuilder.png"
              alt="college"
              className="md:h-16 h-12 md:w-16 w-12"
            />
            <p className="text-[#1B1D1F] font-medium md:mt-5 mt-3 md:text-sm text-xs text-center">
              Documents Builder
            </p>
          </div>
        </SwiperSlide>

        {/*  */}

        <SwiperSlide>
          <div className="h-full p-5 [box-shadow:0px_0px_2px_0px_#00000026] bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition">
            <img
              src="/DocumentsBuilder.png"
              alt="college"
              className="md:h-16 h-12 md:w-16 w-12"
            />
            <p className="text-[#1B1D1F] font-medium md:mt-5 mt-3 md:text-sm text-xs text-center">
              Documents Builder
            </p>
          </div>
        </SwiperSlide>

        {/*  */}

        <SwiperSlide>
          <div className="h-full p-5 [box-shadow:0px_0px_2px_0px_#00000026] bg-white flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition">
            <img
              src="/DocumentsBuilder.png"
              alt="college"
              className="md:h-16 h-12 md:w-16 w-12"
            />
            <p className="text-[#1B1D1F] font-medium md:mt-5 mt-3 md:text-sm text-xs text-center">
              Documents Builder
            </p>
          </div>
        </SwiperSlide>

        {/*  */}

        {/* Add more slides the same way */}
      </Swiper>
    </section>
  );
};

export default Services;
