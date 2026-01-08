"use client";

import React, { useState } from "react";
import PricingCards from "./PricingCards";
import NRIPackage from "./NRIPackage";
import ServiceFlow from "./ServiceFlow";
import MobileSection from "../Home/mobileSection/MobileSection";

const PaymentPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("NEET UG");

  const categories = ["NEET UG", "NEET PG", "IIT/JEE"];

  return (
    <div className="min-h-screen bg-white max-md:pt-[73px] pt-44">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-12 py-10 max-sm:pb-0 text-center relative overflow-hidden bg-[url('/Line.png')] bg-no-repeat bg-center bg-cover">
        {/* <div className="absolute inset-0 w-full h-full bg-white/80 pointer-events-none" /> */}
        <div className="relative z-10">
          <h1 className="text-secondary font-semibold md:text-5xl sm:text-4xl text-3xl mb-4">
            Choose the perfect{" "}
            <span className="font-bold">Plan</span> for{" "}
            <span className="font-bold">Career Counseling</span>
          </h1>
          <p className="text-muted md:text-base sm:text-sm text-xs max-w-3xl mx-auto mb-8">
            Smart packages with expert insights and real-time data without
            breaking the bank.
          </p>

          {/* Category Selection Buttons */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex bg-[#f5fcff] border border-gray-300 rounded-full p-1 gap-1 sm:gap-2 w-full max-w-xs sm:max-w-xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 flex-1 min-w-[90px] sm:min-w-[120px] whitespace-nowrap
                  ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow"
                      : "bg-transparent text-gray-800 hover:bg-gray-100"
                  }
                `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <PricingCards selectedCategory={selectedCategory} />

      {/* NRI Package Section */}
      <NRIPackage />

      <MobileSection/>

      {/* Service Flow Section */}
      <ServiceFlow />
    </div>
  );
};

export default PaymentPage;
