"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TopHeader = () => {
  return (
    <div className="shadow-md z-10 relative max-md:hidden bg-[linear-gradient(45deg,#098493E0_0%,#20DD8EEB_35%,#FFFFFF_35%,#FFFFFF_65%,#098493E0_65%,#20DD8EEB_100%)] overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <img src="/bg-full.png" alt="background" className="w-full h-full object-cover" />
      </div> */}

      {/* Main Content */}
      <div className="flex w-full items-center justify-between text-sm font-medium max-w-7xl mx-auto lg:px-6 px-4">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3 w-1/3 py-2">
          <img src="/web.gif" alt="globe" className="w-6 h-6" />
          <p className='lg:text-sm text-xs'>
            Get MBBS Abroad Free Counselling
            <span className="relative inline-flex ml-1">
              <a href="#" className="underline text-[#FF0000] font-semibold blink-text">Click Here</a>
              <img src="/arrowheader.svg" alt="arrow" className="w-4 h-4 absolute -bottom-3 right-0" />
            </span>
          </p>
        </div>

        {/* CENTER SECTION — made smaller */}
        <div className="w-1/3 text-center py-2 text-black font-semibold   ">
          <Swiper
            className='h-full overflow-hidden'
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide className='lg:text-sm text-xs'>India’s No.1 Medical Counselling Platform</SwiperSlide>
            <SwiperSlide className='lg:text-sm text-xs'>Trusted by 10,000+ Students Worldwide</SwiperSlide>
            <SwiperSlide className='lg:text-sm text-xs'>Get Personalized MBBS Admission Guidance</SwiperSlide>
          </Swiper>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-end gap-3 w-1/3 lg:px-6 py-2 text-white lg:text-sm text-xs">
          <button className="flex items-center gap-2 text-xs font-medium text-white">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.49569 9.81819C1.49294 10.0424 0.742188 10.9387 0.742188 12.0089C0.742188 13.2487 1.74869 14.2544 2.98769 14.2544C4.22744 14.2544 5.23319 13.2487 5.23319 12.0089C5.23319 11.1314 4.72844 10.3709 3.99419 10.0019C4.88819 6.4192 8.13569 3.7627 11.9997 3.7627C15.8599 3.7627 19.1044 6.41469 20.0029 9.99144C19.2567 10.3559 18.7422 11.1232 18.7422 12.0089C18.7422 12.8932 19.2544 13.6582 19.9977 14.0249C19.9947 14.0369 19.9909 14.0497 19.9879 14.0617C19.1299 17.3752 16.2544 19.8817 12.7497 20.1982V18.0037C12.7497 17.5897 12.4137 17.2537 11.9997 17.2537C11.5857 17.2537 11.2497 17.5897 11.2497 18.0037V20.9962C11.2497 21.4102 11.5857 21.7462 11.9997 21.7462C12.0522 21.7462 12.1002 21.7469 12.1542 21.7462C16.6234 21.6772 20.3659 18.5834 21.4399 14.4382C21.4609 14.3579 21.4804 14.2769 21.4992 14.1959C22.4922 13.9642 23.2332 13.0724 23.2332 12.0089C23.2332 10.9477 22.4952 10.0574 21.5052 9.82419C20.5152 5.4967 16.6332 2.2627 11.9997 2.2627C7.36844 2.2627 3.48794 5.4937 2.49569 9.81819ZM2.98769 11.2642C3.39944 11.2642 3.73319 11.5979 3.73319 12.0089C3.73319 12.4207 3.39944 12.7544 2.98769 12.7544C2.57669 12.7544 2.24219 12.4207 2.24219 12.0089C2.24219 11.5979 2.57669 11.2642 2.98769 11.2642ZM20.9472 12.7537C21.4084 12.7537 21.7332 12.4207 21.7332 12.0089C21.7332 11.5979 21.3994 11.2642 20.9877 11.2642C20.5767 11.2642 20.2422 11.5979 20.2422 12.0089C20.2422 12.3952 20.5609 12.7537 20.9472 12.7537Z" fill="#FFB03C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.46275 16.5936C7.84575 15.6981 6.75 13.9746 6.75 11.9976C6.75 9.09956 9.10275 6.74756 12 6.74756C14.8973 6.74756 17.25 9.09956 17.25 11.9976C17.25 13.9746 16.1542 15.6981 14.5372 16.5936C14.175 16.7946 14.0438 17.2513 14.244 17.6128C14.445 17.9751 14.9017 18.1063 15.264 17.9061C17.3422 16.7548 18.75 14.5393 18.75 11.9976C18.75 8.27156 15.7253 5.24756 12 5.24756C8.27475 5.24756 5.25 8.27156 5.25 11.9976C5.25 14.5393 6.65775 16.7548 8.736 17.9061C9.09825 18.1063 9.555 17.9751 9.756 17.6128C9.95625 17.2513 9.825 16.7946 9.46275 16.5936Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.6857 13.4999C13.2732 13.9589 12.6762 14.2477 12.0117 14.2477C11.3419 14.2477 10.7404 13.9537 10.3279 13.4887C10.0534 13.1789 9.57868 13.1504 9.26893 13.4249C8.95918 13.7002 8.93068 14.1742 9.20518 14.4839C9.89293 15.2587 10.8957 15.7477 12.0117 15.7477C13.1187 15.7477 14.1147 15.2669 14.8009 14.5027C15.0777 14.1952 15.0522 13.7204 14.7447 13.4437C14.4364 13.1669 13.9624 13.1924 13.6857 13.4999Z" fill="#FFB03C"/>
            </svg>

            Request a call back
          </button>

          <a
            href="#"
            className="flex items-center gap-2 bg-[#1193D4] border border-white rounded-full p-1  text-white font-medium"
          >
            <img src="/telegram.png" alt="telegram" className='size-5' />


            Join Our Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
