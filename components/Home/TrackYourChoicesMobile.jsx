import React from "react";
import CounsellingCards from "./CounsellingCards/CounsellingCards";

const TrackYourChoicesMobile = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 px-4">
        {/* Heading */}
        <div className="text-secondary font-medium md:text-5xl sm:text-4xl text-3xl text-center capitalize">
          Track Your Choices in 5{" "}
          <span className="font-bold text-primary">Simple Steps</span>
        </div>

        {/* Paragraph */}
        <div className="md:font-medium md:text-base sm:text-sm text-xs text-muted text-center md:mt-4 mt-2 max-w-2xl mx-auto leading-relaxed">
          Our intuitive tracker makes managing your NEET counseling choices effortless.
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 items-center mt-10 gap-6">
          {/* Left Side - Mobile Phone Mockup */}
          <div className="flex justify-center lg:justify-start col-span-12 lg:col-span-4">
            <img src="/Trackyourchossice.png" alt="png" className="max-w-full h-auto" />
          </div>

          {/* Right Side - Feature Cards Grid */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <CounsellingCards />

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackYourChoicesMobile;
