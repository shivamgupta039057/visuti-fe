"use client";
import React from "react";

const Counter = () => {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10 py-10 relative">
        {/* Wrapper with animation */}
        <div className="flex lg:gap-40 md:gap-32 sm:gap-24 gap-16 animate-scroll whitespace-nowrap">
          {/* Repeat slides */}
          <div className="flex lg:gap-40 md:gap-32 sm:gap-24 gap-16">
            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                10+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                years of experience
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                790+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                universities tie ups
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                100%
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                AI App accuracy
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                12340+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                success stories
              </div>
            </div>
          </div>

          {/* Duplicate for infinite loop */}
          <div className="flex lg:gap-40 md:gap-32 sm:gap-24 gap-16">
            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                10+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                years of experience
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                790+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                universities tie ups
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                100%
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                AI App accuracy
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                12340+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                success stories
              </div>
            </div>
            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                10+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                years of experience
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                790+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                universities tie ups
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                100%
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                AI App accuracy
              </div>
            </div>

            <div className="text-center">
              <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                12340+
              </div>
              <div className="md:text-2xl sm:text-xl text-sm font-medium text-white md:mt-3 mt-2">
                success stories
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default Counter;
