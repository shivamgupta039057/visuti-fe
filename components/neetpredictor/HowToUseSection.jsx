"use client"
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HowToUseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slidesData = [
    {
      title: "select a predictor to get started",
      image: "/iPhone-13-Pro-Front.png"
    },
    {
      title: "Step 2: Select Preferences",
      image: "/iPhone-13-Pro-Front.png"
    },
    {
      title: "Step 3: Get Predictions",
      image: "/iPhone-13-Pro-Front.png"
    },
    {
      title: "Step 4: View Results",
      image: "/iPhone-13-Pro-Front.png"
    }
  ];
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

        {/* Left Image Section with Swiper - 40% */}
        <div className="relative flex flex-col items-center w-full lg:w-[40%] ">
          {/* Gradient Background Container */}
          <div className="bg-[linear-gradient(180deg,_#CDFBC2_0%,_#EEFFED_50%,_#DCF5EF_100%)] rounded-t-3xl pl-2 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full">
            {/* Custom Pagination with rounded rectangles - Above Title */}
            <div className="flex items-center justify-center gap-2 pt-4 pb-2">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideToLoop(index);
                    }
                  }}
                  className={`h-2 transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-[#20B486] w-16' 
                      : 'bg-white w-16'
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Title that changes with slide */}
            <div className="w-full text-center pt-3 pb-2 text-lg font-bold text-black">
              {slidesData[activeIndex]?.title || slidesData[0].title}
            </div>
            
            {/* Swiper inside gradient container */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full custom-swiper-pagination"
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-2xl px-5 w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Swiper Pagination Styles */}
          <style jsx global>{`
            .custom-swiper-pagination .swiper-pagination {
              display: none;
            }
          `}</style>
        </div>

        {/* Right Text Section - 60% */}
        <div className="w-full lg:w-[60%]">
          <div className="relative z-10 flex flex-col">
              <h2 className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl mb-6 capitalize">
                  How To Use<span className="text-primary font-semibold">NEET Predictor?</span>   
              </h2>
          
          </div>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Students are advised to keep their NEET percentile or rank ready before using
            the NEET college predictor tool. Candidates can use the NEET 2026 College
            Predictor by following a few simple steps.
          </p>

          {/* Steps List */}
          <ul className="space-y-6 mt-10">
            {[
              "Visit NEET college predictor tool",
              "Enter details such as NEET rank, seat type, and phone number",
              "Click on ‘predict my colleges’ tab",
              "The college names will get displayed by the medical college predictor tool",
            ].map((step, index, arr) => (
              <li key={index} className="flex items-start space-x-3">
                {/* Step Number with connecting line */}
                <div className="flex flex-col items-center relative">
                  <span
                    className={`relative bg-[#20B486] w-7 h-7 flex items-center justify-center text-white text-sm font-medium rounded-full
                      ${index !== arr.length - 1
                        ? "after:absolute after:w-[2px] after:h-8 after:bg-[#20B486] after:bottom-[-32px] after:left-1/2 after:-translate-x-1/2"
                        : ""}`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Step Description */}
                <p className="text-gray-800 text-base leading-snug md:text-lg">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          {/* Note Section */}
          <p className="text-sm text-gray-700 mt-10 sm:mt-8">
            <strong>Note:</strong> Vistucareer’s NEET 2026 College Predictor is a helpful
            tool for medical aspirants to estimate which MBBS and BDS colleges they might
            get into based on their NEET 2026 percentile.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
