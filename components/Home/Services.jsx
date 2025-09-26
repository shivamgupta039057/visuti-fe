"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  return (
    <section className="md:py-16 py-10 max-w-7xl mx-auto lg:px-6 px-4 relative w-full">
      {/* Header with navigation */}
      <div className="flex items-center justify-between gap-3 md:mb-12 mb-8">
        {/* Heading */}
        <div>
          <h2 className="text-secondary font-medium  md:text-5xl sm:text-4xl text-3xl capitalize ">
            Explore our{" "}
            <span className="text-primary font-bold">Services</span>
          </h2>
          <p className="md:font-medium md:text-base sm:text-sm text-xs text-muted sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxe">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-1 relative [transform:translateX(-62px)] max-sm:hidden">
      
          <div
            className="swiper-button-prev after:content-none bg-[#20B486] [box-shadow:-4px_4px_20px_0px_#20B4861F] md:h-10 h-8 md:w-10 w-8 rounded-lg relative p-2"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          >
            <img src="/CaretRight.png" alt="right"  className="[filter:none"/>

          </div>
          <div
            className="swiper-button-next after:content-none bg-[#20B486] [box-shadow:-4px_4px_20px_0px_#20B4861F] md:h-10 h-8 md:w-10 w-8 rounded-lg relative p-2"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          >
            <img src="/CaretLeft.png" alt="left" className="[filter:invert(1)_brightness(2.5)]" />
          </div>
         
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          340: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        className="servicesSwiper"
      >
        {[
          { img: "/collegeview.png", title: "Colleges View" },
          { img: "/Comparecollege.png", title: "Compare College" },
          { img: "/NEETPredictor.png", title: "NEET Predictor" },
          { img: "/DocumentsBuilder.png", title: "Documents Builder" },
          { img: "/collegeview.png", title: "Colleges View" },
          { img: "/Comparecollege.png", title: "Compare College" },
          { img: "/NEETPredictor.png", title: "NEET Predictor" },
          { img: "/DocumentsBuilder.png", title: "Documents Builder" },
          // { img: "/Counseling.png", title: "Counseling Notification" },
          // { img: "/MBBS.png", title: "MBBS Abroad" },
        ].map((service, idx) => (
          <SwiperSlide key={idx} className="py-1">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center h-full">
              <img
                src={service.img}
                alt={service.title}
                className="md:h-16 h-12 md:w-16 w-12 object-contain"
              />
              <p className="text-[#1B1D1F] font-medium mt-4 md:text-base text-sm">
                {service.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
