"use client";

import React from "react";
import Image from "next/image";

const BlogPromoCards = () => {
  return (
    <section className="md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column - Large Vertical Card */}
          <div className="overflow-hidden flex flex-col">
            <div className="relative w-full rounded-2xl flex-shrink-0 h-48 sm:h-64 md:h-[266px] overflow-hidden">
              <Image
                src="/blog1.png"
                alt="Live Counseling Support"
                fill
                className="object-cover"
              />
            </div>
            <div className="py-4 sm:py-6 md:py-8 flex-1 flex flex-col justify-end">
              <h3 className="text-secondary font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                Live Counseling Support Available
              </h3>
              <p className="text-muted text-xs sm:text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Sed do eiusmod eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut eni
              </p>
            </div>
          </div>

          {/* Right Column - Two Horizontal Cards Stacked, each half height */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Top Right Card - Horizontal Layout */}
            <div className="overflow-hidden flex flex-col sm:flex-row flex-1 min-h-0">
              <div className="relative sm:w-2/5 w-full h-32 sm:h-48 md:h-[180px] flex-shrink-0">
                <Image
                  src="/blog3.png"
                  alt="Data Privacy And Security Compliance"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="p-2 sm:p-4 flex-1 flex flex-col justify-end">
                <h3 className="text-secondary font-bold text-sm sm:text-base md:text-xl mb-1 sm:mb-3">
                  Data Privacy And Security Compliance
                </h3>
                <p className="text-muted text-xs sm:text-sm md:text-base leading-relaxed line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. lit. Sed do eiusmod tempor  Sed do eiusmod tempor lit. Sed do eiusmod tempor lit. Sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>
              </div>
            </div>

            {/* Bottom Right Card - Horizontal Layout */}
            <div className="overflow-hidden flex flex-col sm:flex-row flex-1 min-h-0">
              <div className="relative sm:w-2/5 w-full h-32 sm:h-48 md:h-[180px] flex-shrink-0">
                <Image
                  src="/blog2.png"
                  alt="Data Privacy And Security Compliance"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="p-2 sm:p-4 flex-1 flex flex-col justify-end">
                <h3 className="text-secondary font-bold text-sm sm:text-base md:text-xl mb-1 sm:mb-3">
                  Data Privacy And Security Compliance
                </h3>
                <p className="text-muted text-xs sm:text-sm md:text-base leading-relaxed line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. lit. Sed do eiusmod tempor  Sed do eiusmod tempor lit. Sed do eiusmod tempor lit. Sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPromoCards;

