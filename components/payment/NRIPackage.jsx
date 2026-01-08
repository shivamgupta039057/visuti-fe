"use client";

import React from "react";
import { Play, MessageCircle } from "lucide-react";

const NRIPackage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
      <div className="bg-[#181e27] rounded-2xl shadow-xl flex flex-col md:flex-row lg:items-center justify-between p-8 md:p-16 gap-8">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-4xl mb-4 leading-tight">
            NRI Management
            <br />Counselling Package
          </h2>
          <p className="text-white/80 text-lg mb-6">
            2 lakh + GST (NRI COUNSELLING PACKAGE )
          </p>
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md">
            Get Started
          </button>
        </div>
        {/* Right Illustration */}
        <div className="flex-1 flex items-end justify-end h-full mt-8 lg:mt-0 lg:items-end lg:justify-end">
          <img
            src="/illustration.png"
            alt="NRI Package Illustration"
            className="max-h-48 sm:max-h-64 w-auto object-contain lg:-mb-20 -mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default NRIPackage;

