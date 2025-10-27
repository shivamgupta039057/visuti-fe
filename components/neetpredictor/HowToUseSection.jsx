import React from "react";

export default function HowToUseSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 px-6 md:px-10">
        
        {/* Left Image Section */}
        <div className="relative flex justify-center lg:col-span-5 col-span-12 order-1 lg:order-none">
          <img
            src="/howtouse.png"
            alt="Predictor App Screenshot"
            className="rounded-2xl w-full max-w-md md:max-w-full object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="lg:col-span-7 col-span-12">
          <div className="relative z-10 flex flex-col">
              <h2 className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl mb-6 capitalize">
                  How To Use<span className="text-primary font-semibold">NEET Predictor?</span>   
              </h2>
          
          </div>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Students are advised to keep their NEET percentile or rank ready before using
            the NEET college predictor tool. Candidates can use the NEET 2026 College
            Predictor by following a few simple steps.
          </p>

          {/* Steps List */}
          <ul className="space-y-6 mt-10">
            {[
              "Visit NEET college predictor tool",
              "Enter details such as NEET rank, seat type, and phone number",
              "Click on ‘predict my colleges’ tab",
              "The college names will get displayed by the medical college predictor tool",
            ].map((step, index, arr) => (
              <li key={index} className="flex items-start space-x-3">
                {/* Step Number with connecting line */}
                <div className="flex flex-col items-center relative">
                  <span
                    className={`relative bg-[#20B486] w-7 h-7 flex items-center justify-center text-white text-sm font-medium rounded-full
                      ${index !== arr.length - 1
                        ? "after:absolute after:w-[2px] after:h-8 after:bg-[#20B486] after:bottom-[-32px] after:left-1/2 after:-translate-x-1/2"
                        : ""}`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Step Description */}
                <p className="text-gray-800 text-base leading-snug">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          {/* Note Section */}
          <p className="text-sm text-gray-700 mt-6">
            <strong>Note:</strong> Vistucareer’s NEET 2026 College Predictor is a helpful
            tool for medical aspirants to estimate which MBBS and BDS colleges they might
            get into based on their NEET 2026 percentile.
          </p>
        </div>
      </div>
    </section>
  );
}
