"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const countries = [
  { name: "Russia", img: "/Russia.png", universities: "7+ universities" },
  { name: "Nepal", img: "/nepal.png", universities: "7+ universities" },
  { name: "Georgia", img: "/georgia.png", universities: "7+ universities" },
  { name: "Kyrgyzstan", img: "/kyrgyzstan.png", universities: "7+ universities" },
  { name: "Kazakhstan", img: "/kazakhstan.png", universities: "7+ universities" },
  { name: "Tajikistan", img: "/tajikistan.png", universities: "7+ universities" },
  { name: "Russia", img: "/Russia.png", universities: "7+ universities" },
  { name: "Nepal", img: "/nepal.png", universities: "7+ universities" },
  { name: "Georgia", img: "/georgia.png", universities: "7+ universities" },
  { name: "Kyrgyzstan", img: "/kyrgyzstan.png", universities: "7+ universities" },
  { name: "Kazakhstan", img: "/kazakhstan.png", universities: "7+ universities" },
  { name: "Tajikistan", img: "/tajikistan.png", universities: "7+ universities" },
];

export default function CountrySection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <section className="max-w-7xl mx-auto md:my-10 my-5 px-4 relative">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-4 z-10">
        {/* Prev Button */}
        <button
          ref={prevRef}
          onClick={() => setActiveBtn("prev")}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-md flex items-center justify-center transition-all duration-200 
            ${
              activeBtn === "prev"
                ? "bg-primary text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={activeBtn === "prev" ? "#fff" : "#333"}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          ref={nextRef}
          onClick={() => setActiveBtn("next")}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-md flex items-center justify-center transition-all duration-200 mr-8
            ${
              activeBtn === "next"
                ? "bg-primary text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={activeBtn === "next" ? "#fff" : "#333"}
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {countries.map((country, index) => (
          <SwiperSlide key={index}>
            <div className="md:border-2 border-[1px] border-dashed border-black/50 bg-white rounded-lg p-4 flex items-center justify-center flex-col md:gap-3 hover:shadow-lg transition-all duration-200">
              <img
                src={country.img}
                alt={country.name}
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full object-cover"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                {country.name}
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1 text-[10px]">
                {country.universities}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
