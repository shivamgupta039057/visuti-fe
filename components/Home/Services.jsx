"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  return (
    <section className="md:py-16 py-10 max-w-7xl mx-auto lg:px-6 px-4 relative w-full">
      {/* Header with navigation */}
      <div className="flex items-center justify-between gap-3 md:mb-12 mb-8">
        <div>
          <h2 className="text-secondary font-medium md:text-5xl sm:text-4xl text-3xl capitalize">
            Explore our{" "}
            <span className="text-primary font-bold">Services</span>
          </h2>
          <p className="md:font-medium md:text-base sm:text-sm text-xs text-muted sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxe">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        {/* Custom Navigation Buttons */}
      <div className="flex items-center gap-3">
            {/* Left Button (White) */}
            <button
              className=" flex items-center justify-center w-10 h-10 rounded-[10px] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 
                        transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Right Button (Green) */}
            <button
              className=" flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#00C896] 
                        shadow-[0_6px_25px_rgba(0,200,150,0.4)] 
                        transition-all duration-300 hover:shadow-[0_8px_35px_rgba(0,200,150,0.5)]"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // spaceBetween={28} // 👈 adds gap between slides
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
          { img: "/DocumentsBuilder.png", title: "Choise Filling Maker" },
        ].map((service, idx) => (
          <SwiperSlide
            key={idx}
            className="p-2"
          >
            <div className="p-6 bg-white rounded-[10px] shadow-[0_5px_16px_rgb(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
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
