"use client";

import React from "react";

const AboutHero = () => {
  return (
    <section className="relative max-md:pt-[73px] max-sm:pt-10 pt-44 md:py-16 py-10 bg-white lg:mt-40 md:mt-20 mt-10">
      <div className="max-w-7xl mx-auto lg:px-6 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full border border-[#EFEFEF] rounded-[24px] p-5">
            <img
              src="/Subtract.png"
              alt="Lucca City View"
              className="w-full h-72 sm:h-96 md:h-[500px] rounded-[20px] object-cover shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="text-sm font-medium uppercase tracking-wider  text-[#333333]">WELCOME TO VISUTI CAREER</div>
            <h1 className="text-secondary font-bold  sm:text-4xl text-3xl leading-tight">
            We Are The Center Of Lucca
            To Offer You The Best
            </h1>
            <div className="space-y-4 text-[#333333] md:text-base sm:text-sm text-xs leading-relaxed">
              <p>
                At Visuti Career, we are committed to providing the best services and solutions 
                to help you achieve your goals. With years of experience and a team of dedicated 
                professionals, we strive to deliver excellence in everything we do.
              </p>
              <p>
                Our mission is to empower individuals and businesses through innovative solutions, 
                expert guidance, and unwavering commitment to client success. We believe in building 
                long-term relationships based on trust, transparency, and results.
              </p>
              <p>
                Whether you're looking for career guidance, educational support, or professional 
                development, we are here to help you navigate your journey with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

