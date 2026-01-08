"use client";
import React from "react";

export default function HowToUseTextSection() {
  return (
    <section className="lg:py-16 md:py-12 py-10 bg-white relative ">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 md:px-10">
        <div className="flex flex-col">
          <h2 className="text-secondary font-semibold md:text-5xl sm:text-4xl text-2xl  mb-4 sm:mb-6 capitalize">
            How To Use <span className="text-primary font-semibold">NEET Predictor?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
            <strong>Note:</strong> Visuti Career's NEET 2026 College Predictor is a helpful tool for medical aspirants to estimate which MBBS and BDS colleges they might get into based on their NEET 2026 percentile. It includes government and private medical colleges across India under both All India Quota (AIQ) and State Quotas. Simply enter your correct percentile to receive a list of possible colleges. The final seat allotment will be conducted by MCC and respective state counselling authorities.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
            <strong>Note:</strong> Visuti Career's NEET 2026 College Predictor is a helpful tool for medical aspirants to estimate which MBBS and BDS colleges they might get into based on their NEET 2026 percentile. It includes government and private medical colleges across India under both All India Quota (AIQ) and State Quotas. Simply enter your correct percentile to receive a list of possible colleges.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Students are advised to keep their NEET percentile or rank ready before using the NEET college predictor tool. Candidates can use the NEET 2026 College Predictor by following a few simple steps.
          </p>
          <ul className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            {[
              "Visit NEET college predictor tool",
              "Enter the details such as NEET rank, seat type and phone number",
              "Then, click on ‘predict my colleges’ tab",
              "The college names will get displayed by the medical college predictor tool",
            ].map((step, index, arr) => (
              <li key={index} className="flex items-start space-x-3">
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
                <p className="text-gray-800 text-sm sm:text-base leading-snug md:text-lg mb-0">
                  {step}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
