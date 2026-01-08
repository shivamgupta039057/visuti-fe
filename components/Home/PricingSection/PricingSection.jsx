"use client";
import React from "react";

const PricingSection = () => {
  const pricingCards = [
    {
      id: 1,
      category: "NEET",
      title: "UG",
      titleColor: "text-[#007AFF]",
      subtitle: "Under Graduate MBBS & BDS",
      bgImage: "/ugneet.png",

    
    },
    {
      id: 2,
      category: "NEET",
      title: "MDS",
      titleColor: "text-[#5856D6]",
      subtitle: "Master of Dental Science",
      bgImage: "/mddsneet.png",
 
    },
    {
      id: 3,
      category: "NEET",
      title: "PG",
      titleColor: "text-[#FF9500]",
      subtitle: "Post Graduate",
      bgImage: "/pgneet.png",
   
    },
  ];

  return (
    <section className="md:py-16 sm:py-12 py-10 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl text-black mb-4">
            More Than Data, For Less Than You Think
          </h2>
          <p className="text-gray-600 md:text-lg sm:text-base text-sm max-w-3xl mx-auto">
            Smart packages with expert insights and real-time data without breaking the bank.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {pricingCards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl sm:p-8 p-6 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 group bg-cover bg-center min-h-[280px] sm:min-h-[320px] flex flex-col"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            >
              {/* Category Label */}
              <div className="text-gray-700 text-xs sm:text-sm font-medium mb-2">
                {card.category}
              </div>

              {/* Title */}
              <div className={`${card.titleColor} font-bold text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3`}>
                {card.title}
              </div>

              {/* Subtitle */}
              <div className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">
                {card.subtitle}
              </div>

              <div className="flex-1" />

              {/* Price */}
              <div>
                <div className="text-gray-600 text-xs sm:text-sm mb-1">Starting from</div>
                <div className={`${card.titleColor} font-bold text-3xl sm:text-4xl flex items-center`}>
                  <span className="text-2xl sm:text-3xl mr-1">₹</span>2999
                </div>
              </div>

              {/* Background Illustration */}
              <div className="absolute inset-0 pointer-events-none">
                {card.illustration}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


