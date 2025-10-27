"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const StuderVideo = () => {
  return (
    <section className="relative lg:py-20 md:py-16 py-10 !pb-12">
      <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10 relative">
        <div className="grid grid-cols-12 gap-5">
          {/* Left Text Section */}
          <div className="lg:col-span-4 col-span-12">
            <div className="text-secondary font-semibold lg:text-[40px] md:text-4xl text-3xl capitalize">
              Our Counseling Tailored Says{" "} <br className="max-lg:hidden" />
              <span className="font-bold text-primary"> Our Story</span>
            </div>
            <div className="font-medium lg:text-base md:text-base sm:text-sm text-xs text text-muted mt-4 leading-relaxed text-left">
              Expert counselling for affordable and globally recognized MBBS
              programs abroad
            </div>
            <button className="bg-primary rounded-[10px] px-3.5 py-2.5 text-white text-sm underline lg:mt-12 md:mt-10 sm:mt-8 mt-5 flex items-center gap-3 capitalize">
              more story
              <img src="/Arrowri.svg" alt="arrow" className="size-3" />
            </button>
          </div>

          {/* Right Swiper Section */}
          <div className="lg:col-span-8 col-span-12 relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={15}
              slidesPerView={5} // 👈 Show 5 slides
              breakpoints={{
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 2.2},
                768: { slidesPerView: 3.2},
                1024: { slidesPerView: 4-2 },
                1280: { slidesPerView: 4.3 },
              }}
              className="ourstory"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/beautiful-psychiatrist1.png"
                    alt="user1"
                    className="w-full h-[370px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.9)_100%)]">
                    <h3 className="text-white font-bold text-base">
                      Saloni Mangal
                    </h3>
                    <p className="text-white text-xs">
                      SMS Medical College Jaipur
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/beautiful-psychiatrist2.png"
                    alt="user2"
                    className="w-full h-[370px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.9)_100%)]">
                    <h3 className="text-white font-bold text-base">
                      Aarav Sharma
                    </h3>
                    <p className="text-white text-xs">
                      AIIMS Delhi
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/beautiful-psychiatrist3.png"
                    alt="user3"
                    className="w-full h-[370px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.9)_100%)]">
                    <h3 className="text-white font-bold text-base">
                      Neha Verma
                    </h3>
                    <p className="text-white text-xs">
                      JLN Medical College Ajmer
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/beautiful-psychiatrist1.png"
                    alt="user4"
                    className="w-full h-[370px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.9)_100%)]">
                    <h3 className="text-white font-bold text-base">
                      Rohan Gupta
                    </h3>
                    <p className="text-white text-xs">
                      SMS Medical College Jaipur
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 5 */}
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/beautiful-psychiatrist2.png"
                    alt="user5"
                    className="w-full h-[370px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-2 py-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.9)_100%)]">
                    <h3 className="text-white font-bold text-base">
                      Priya Singh
                    </h3>
                    <p className="text-white text-xs">
                      King George’s Medical University
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Add more SwiperSlide if needed */}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 mt-3">
              <div className="swiper-button-prev group after:content-none h-7 w-7 rounded-full p-2 bg-[#034941] shadow-[ -4px_4px_20px_0px_#20B4861F ] [&.swiper-button-disabled]:bg-[#034941]/90">
                <img src="/CaretRight.png" alt="left" className="w-5 h-5 rotate-180" />

                <svg className="swiper-navigation-icon hidden"></svg>
              </div>
              <div className="swiper-button-next group after:content-none h-7 w-7 rounded-full p-2 bg-[#034941] shadow-[ -4px_4px_20px_0px_#20B4861F ] [&.swiper-button-disabled]:bg-[#034941]/90">
                <img src="/CaretRight.png" alt="right" className="w-5 h-5" />

                <svg className="swiper-navigation-icon hidden"></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StuderVideo;
