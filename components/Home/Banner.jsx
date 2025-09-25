"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="myHeroSwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <section className="relative w-full h-full lg:py-0 md:py-16 py-10 lg:h-[96vh] flex items-center justify-center bg-gray-100">
            <img
              src="/hero1.png"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y5">
                  <h1 className="text-4xl md:text-6xl font-bold leading-snug text-black">
                    India’s <span className="text-primary">1st Rank</span> AI{" "}
                    <br /> Counseling APP
                  </h1>
                  <p className="text-xl text-black font-semibold md:mt-5 mt-3">
                    Neet Expert Counselor For Government &amp; Private College
                  </p>
                  <div className="md:mb-12 md:mt-10 my-7">
                    <button className="bg-[#2E4D3E] text-white font-semibold sm:px-7 px-5 py-3 rounded-full md:text-xl sm:text-lg text-sm">
                      Book Your Seat
                    </button>
                  </div>
                  <p className="text-sm text-black max-w-md italic">
                    Get expert guidance for NEET UG, NEET PG, and IIT admissions. Choose the right career path, best college, and best opportunities for your future success.
                  </p>
                </div>

                {/* Right Content with badges */}
                <div className="relative flex justify-center">
                  {/* Badge 1 */}
                  <div className="max-md:hidden absolute top-5 right-12 flex items-center gap-3 px-5 py-4 rounded-[16px]
                    bg-white/10 backdrop-blur-md border border-white/20 
                    shadow-lg w-fit text-white text-sm font-medium"
                  >
                    📊 <br />
                    50K+ Students Guided
                  </div>

                  {/* Badge 2 */}
                  <div className="max-md:hidden absolute -bottom-52 right-36 flex flex-col gap-3 px-5 py-4 rounded-[16px] 
                    bg-black/60 backdrop-blur-md border border-white/20 
                    shadow-lg w-fit text-white text-sm font-medium"
                  >
                    ⭐⭐⭐⭐⭐ <br />
                    🎓 95% Better Decisions <br />
                    🏫 Trusted for NEET &amp; IIT
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <section className="relative w-full h-full lg:py-0 md:py-16 py-10 lg:h-[96vh] flex items-center justify-center bg-gray-100">
            <img
              src="/her02.png"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y5">
                  <h1 className="text-4xl md:text-6xl font-bold leading-snug text-black">
                    India’s <span className="text-primary">1st Rank</span> AI{" "}
                    <br /> Counseling APP
                  </h1>
                  <p className="text-xl text-black font-semibold md:mt-5 mt-3">
                    Neet Expert Counselor For Government &amp; Private College
                  </p>
                  <div className="md:mb-12 md:mt-10 my-7">
                    <button className="bg-[#2E4D3E] text-white font-semibold sm:px-7 px-5 py-3 rounded-full md:text-xl sm:text-lg text-sm">
                      Book Your Seat
                    </button>
                  </div>
                  <p className="text-sm text-black max-w-md italic">
                     Get expert guidance for NEET UG, NEET PG, and IIT admissions. Choose the right career path, best college, and best opportunities for your future success.
                  </p>
                </div>

                {/* Right Content with badges */}
                <div className="relative flex justify-center">
                  {/* Badge 1 */}
                  <div className="absolute top-5 right-12 flex items-center gap-3 px-5 py-4 rounded-[16px]
                    bg-white/10 backdrop-blur-md border border-white/20 
                    shadow-lg w-fit text-white text-sm font-medium"
                  >
                    📊 <br />
                    50K+ Students Guided
                  </div>

                  {/* Badge 2 */}
                  <div className="absolute -bottom-52 right-36 flex flex-col gap-3 px-5 py-4 rounded-[16px] 
                    bg-black/60 backdrop-blur-md border border-white/20 
                    shadow-lg w-fit text-white text-sm font-medium"
                  >
                    ⭐⭐⭐⭐⭐ <br />
                    🎓 95% Better Decisions <br />
                    🏫 Trusted for NEET &amp; IIT
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
