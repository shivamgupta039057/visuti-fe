'use client';

import React from 'react';
import { CheckCircle, UserCheck, Video } from 'lucide-react';
import VideoSection from './VideoSection';

export default function WhatIsNeetPredictor() {
  return (
    <section className="bg-white py-14 ">
      <div className="max-w-7xl mx-auto lg:px-6 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Section - Text */}
        <div>
          <h2 className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl">
            What is <span className="text-primary">NEET Predictor?</span>
          </h2>

          <p className="text-secondary mt-4 leading-relaxed">
            NEET College Predictor 2026 is designed to assist the candidates in
            predicting their chances of admission to top Medical, dental, Ayush
            and all other medical courses based on students' NEET scores. NEET
            College Predictor 2026 covers the previous year’s NEET Cut off data.
          </p>

          <p className="text-secondary mt-3 leading-relaxed">
            To provide the list of the most suitable medical/dental colleges in
            India, Vistucareer NEET College Predictor uses opening and closing
            ranks derived from the seat allotment result of NEET counselling.
          </p>

          {/* Info Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="flex items-start gap-3 border border-gray-200 bg-[#F9FFFA] rounded-xl p-5 hover:shadow-md transition">
              <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Expert Guidance
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Receive personalized counseling from experienced professionals
                  dedicated to your success.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-3 border border-gray-200 bg-[#F9FFFA] rounded-xl p-5 hover:shadow-md transition">
              <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Proven Results
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Our track record ensures high success rates in university
                  placements and visa approvals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image/Video */}
       <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
         <VideoSection />
        </div>

      </div>
    </section>
  );
}
