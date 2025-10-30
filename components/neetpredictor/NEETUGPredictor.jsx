'use client';

import React from "react";
import QuotaCards from "./QuotaCards";
import FigmaMake from "./figmaMake/FigmaMake";

export default function NEETUGPredictor() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Header */}
     <div className="max-w-7xl mx-auto relative lg:px-6 px-4">
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center mb-10">
              <h2 className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl text-center capitalize">
                AI NEET UG Predictor <span className="text-primary font-semibold">2026</span>   
              </h2>
              <p className="md:font-medium md:text-base sm:text-sm text-xs text-muted text-center sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
              Hear from students who turned their dreams into reality with our expert guidance.
              </p>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Section (Tablet UI + Counselling Card) */}
        <div className="flex flex-col items-center lg:items-start sticky top-0">
          {/* Device Image */}
          <div className="w-full mb-6 ">
           <FigmaMake />
          </div>

          {/* Counselling Card */}
          <div className="border border-[#0000001A]/50 rounded-[10px] p-6 w-full mx-auto bg-[linear-gradient(0deg,#F2FBED,#F2FBED)] shadow-sm">
            <h2 className="text-lg md:text-xl font-extrabold text-black">
              Need Expert Counselling?
            </h2>

            <p className="text-primary font-medium text-base md:text-xl mt-1">
              Get personalized guidance from our NEET experts
            </p>

            <div className="mt-5 inline-flex items-center gap-3 bg-white px-4 py-3 rounded-lg transition [box-shadow:0px_3px_14px_0px_#00000026] hover:scale-[1.02] duration-200">
              {/* Icon */}
              <div className="size-10 rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#20B486" />
                  <path
                    d="M13.8463 11.7847C14.3383 11.8771 14.7301 12.1776 14.9736 12.5745L15.7491 13.839C16.0347 14.3047 16.2751 14.6967 16.4321 15.0374C16.5986 15.3988 16.6975 15.7552 16.6523 16.1493C16.6071 16.5433 16.4294 16.8735 16.1844 17.1959C15.9535 17.4999 15.6293 17.8383 15.2441 18.2404L14.1041 19.4306C13.8998 19.6438 13.7976 19.7505 13.7883 19.8837C13.779 20.017 13.8627 20.1308 14.0301 20.3585C15.4571 22.299 17.3804 24.0476 19.5172 25.3456C19.7677 25.4978 19.8929 25.5739 20.0396 25.5654C20.1862 25.5569 20.3036 25.4641 20.5382 25.2784L21.8478 24.2423C22.2902 23.8921 22.6626 23.5975 22.997 23.3876C23.3518 23.1649 23.7151 23.0034 24.1486 22.9623C24.5822 22.9213 24.9743 23.0111 25.372 23.1625C25.7468 23.3052 26.1781 23.5236 26.6904 23.7832L28.0818 24.4881C28.5186 24.7094 28.8491 25.0655 28.9508 25.5127C29.0536 25.9645 28.902 26.4187 28.5673 26.792C27.3527 28.1463 25.4068 29.0087 23.3654 28.6344C22.1105 28.4044 20.8724 28.0211 19.375 27.2406C16.3663 25.6723 13.6686 23.2192 11.9451 20.4878C11.0863 19.1269 10.6646 18.0016 10.4115 16.8611C9.99967 15.0058 10.9485 13.2372 12.4387 12.1333C12.8494 11.8291 13.3491 11.6913 13.8463 11.7847Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.992 12.3477C24.4716 12.3477 24.8603 12.7009 24.8603 13.1368V15.5041H27.465C27.9445 15.5041 28.3332 15.8574 28.3332 16.2932C28.3332 16.729 27.9445 17.0823 27.465 17.0823H24.8603V19.4496C24.8603 19.8854 24.4716 20.2387 23.992 20.2387C23.5125 20.2387 23.1238 19.8854 23.1238 19.4496V17.0823H20.5191C20.0396 17.0823 19.6509 16.729 19.6509 16.2932C19.6509 15.8574 20.0396 15.5041 20.5191 15.5041L23.1238 15.5041V13.1368C23.1238 12.7009 23.5125 12.3477 23.992 12.3477Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-gray-800">
                  Talk To Expert
                </span>
                <span className="text-sm text-gray-600">
                  +91 9145879646
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Cards) */}
        <div className="grid grid-cols-1 gap-6">
          <QuotaCards />
        </div>
      </div>
    </div>
  );
}
