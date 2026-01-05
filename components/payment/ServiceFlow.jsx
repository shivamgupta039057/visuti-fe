"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Submit Your Quarry",
    description: "Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum has been the text.",
    color: "#FF6B9D", // Pink
    titleColor: "#FF0000", // Red
    position: { top: "-3%", left: "25%" },
    textClass: "text-[#FF0000] font-semibold"
  },
  {
    number: "02",
    title: "Review by our Counseller",
    description: "Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum has been the text.",
    color: "#FF8C42", // Orange
    titleColor: "#FF8C42", // Orange
    position: { top: "80%", left: "13%" },
    textClass: "text-[#FF8C42] font-semibold"
  },
  {
    number: "03",
    title: "One to One Conversation for Counselling",
    description: "Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum has been the text.",
    color: "#4A90E2", // Blue
    titleColor: "#4A90E2", // Blue
    position: { top: "80%", left: "50%" },
    textClass: "text-[#4A90E2] font-semibold"
  },
  {
    number: "04",
    title: "Best Fit College Suggestion and Giving You Advice",
    description: "Lorem Ipsum is simply dummy text of printing and industry. Lorem Ipsum has been the text.",
    color: "#5BC0DE", // Light Blue/Cyan
    titleColor: "#4A90E2", // Blue
    position: { top: "24%", left: "85%" },
    textClass: "text-[#009FE3] font-semibold"
  },
  {
    number: "05",
    title: "Best Fit College Suggestion and Giving You Advice",
    description: "Lorem Ipsum is simply dummy text of printing and industry.",
    color: "#9B59B6", // Purple
    titleColor: "#9B59B6", // Purple
    position: { top: "100%", left: "96%" },
    textClass: "text-[#9B59B6] font-semibold"
  },
];

const ServiceFlow = () => (
  <section className="md:py-16 py-10 md:pb-28  w-full relative overflow-hidden  bg-[url('/serivces.png')] bg-center bg-cover bg-no-repeat">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center md:mb-16 mb-10">
        <h2 className="text-black font-bold md:text-4xl text-2xl mb-2">Flow of our Service</h2>
        <p className="text-gray-600 md:text-lg text-base">Best Advice will gave a best result</p>
      </div>
      {/* Service Flow Path Container */}
      <div className="relative w-full h-[600px] md:h-[800px] hidden sm:block">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <img src="/world-map.png" alt="World Map" className="w-full h-full object-cover opacity-20" />
        </div>
        {/* Steps positioned along the path */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="absolute text-center px-2 sm:px-0"
            style={{
              top: step.position.top,
              left: step.position.left,
              transform: 'translate(-50%, -50%)',
              width: '310px',
              maxWidth: '90vw',
            }}
          >
            <div className="mt-2 sm:mt-4 w-full">
              <h3 className={`mb-1 sm:mb-2 leading-tight text-sm sm:text-base md:text-lg ${step.textClass}`}>{step.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile Steps (below md) */}
      <div className="block sm:hidden w-full mt-8">
        <div className="flex flex-col gap-6 items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 w-full sm:max-w-xs mx-auto text-center">
              <div className={`text-xs font-bold mb-1 ${step.textClass}`}>{step.number}. {step.title}</div>
              <div className="text-gray-600 text-xs leading-relaxed">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceFlow;
