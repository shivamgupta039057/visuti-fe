"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogHero = () => {
  return (
    <section className="relative lg:pt-[230px] md:pt-[180px] sm:pt-[120px] pt-20  pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-secondary font-semibold text-2xl sm:text-3xl md:text-5xl mb-3 md:mb-4">
            Our Latest <span className="text-primary font-bold">Blogs</span> and <span className="text-primary font-bold">News</span>
          </h1>
          <p className="text-muted text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            From cut-offs to admission chances, get it all in one place. Stay ahead in your NEET PG 2026 preparation journey.
          </p>
        </div>

        {/* Featured Blog Post Card - Responsive Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Image in col-span-12 on md, col-span-8 on lg+ */}
          <div className="md:col-span-12 lg:col-span-8 col-span-1 h-full rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-[320px]  md:h-[400px] lg:h-[440px] xl:h-[480px] 2xl:h-[520px] ">
              <Image
                src="/blog.png"
                alt="Featured Blog Post"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Card in col-span-12 on md, col-span-4 on lg+; overlap only on lg+ */}
          <div className="md:col-span-12 lg:col-span-4 col-span-1 h-full flex items-center ">
            <Link href="/blog/sms-medical-college-jaipur-details-2026 max-lg-:mx-10"
              className="relative lg:min-w-[550px] lg:-ml-40 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col z-10 border border-gray-100 w-full">
              {/* Category Tag - Green/Teal background */}
              <div className="inline-block max-w-[110px] bg-primary text-white px-4 sm:px-5 py-2 rounded-sm text-xs font-semibold mb-4 sm:mb-5">
                Technology
              </div>
              {/* Blog Post Title - Large bold dark gray */}
              <h2 className="text-secondary font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-8 leading-tight">
                S.M.S. MEDICAL COLLEGE JAIPUR RAJASTHAN COMPLETE DETAILS 2026
              </h2>
              {/* Author Info - At bottom of card */}
              <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/user.png"
                    alt="Jason Francisco"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-secondary font-medium text-xs sm:text-sm md:text-base">Jason Francisco</p>
                  <p className="text-muted text-xs md:text-sm">Dec. 20, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
