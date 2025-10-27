"use client";
import React, { useState } from "react";

const NeetStepsGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Understand types of ILETS Exam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Find a Test Center",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Choose your Test Center",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Register Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="bg-gray-50 px-2 py-4 xs:px-3 sm:p-5 md:p-8">
      <div className="w-full max-w-2xl md:max-w-full mx-auto bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 md:mb-8">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left leading-tight">
            How to use the{" "}
            <span className="text-teal-500">NEET PG 2026</span> College Predictor 2026?
          </h2>
          {/* Navigation Buttons */}
          <div className="flex gap-2 self-center md:self-auto justify-center md:ml-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`w-8 h-8 xs:w-10 xs:h-10 rounded-full flex items-center justify-center transition-all ${
                currentStep === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="Previous"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`w-8 h-8 xs:w-10 xs:h-10 rounded-full flex items-center justify-center transition-all ${
                currentStep === steps.length - 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
              aria-label="Next"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Line and Steps */}
        <div className="relative w-full">
          {/* Progress Line - MOBILE */}
          <div className="flex flex-col md:hidden">
            <div className="absolute top-4 w-full h-1 bg-gray-200 rounded-full mb-8">
              <div
                className="absolute h-1 bg-teal-500 rounded-full transition-all duration-500"
                style={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  maxWidth: "100%",
                  minWidth: "8%",
                }}
              />
            </div>
            {/* Mobile single step display */}
            <div className="flex flex-col items-center z-10 ">
              {/* Step dot */}
              <div className="mb-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-50 transition-all ${
                    "bg-primary text-white"
                  }`}
                >
                  <span className="font-semibold text-lg ">{currentStep + 1}</span>
                </div>
              </div>
              {/* Step content */}
              <div className="text-center transition-opacity duration-300 opacity-100">
                <h3 className="text-base xs:text-lg font-bold text-gray-900 mb-2 px-1">
                  {steps[currentStep].title}
                </h3>
                <p className="text-xs xs:text-sm text-gray-600 leading-relaxed px-1">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
            {/* Step indicators below */}
            <div className="flex justify-center mt-4 gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentStep ? "bg-teal-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Progress Line & All Steps - DESKTOP */}
          <div className="hidden md:block">
            <div className="absolute top-4 w-full h-1 bg-gray-200 rounded-full mb-16">
              <div
                className="absolute h-1  bg-teal-500 rounded-full transition-all duration-500"
                style={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  maxWidth: "100%",
                  minWidth: "8%",
                }}
              />
            </div>
            <div className="relative flex justify-between items-start gap-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-1 min-w-0 px-1"
                >
                  {/* Circle */}
                  <div className="relative z-10 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        index <= currentStep
                          ? "bg-teal-500 text-white"
                          : "bg-white border-4 border-gray-200 text-gray-400"
                      }`}
                    >
                      {index <= currentStep ? (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  {/* Step Content */}
                  <div
                    className={`transition-opacity duration-300 ${
                      index === currentStep ? "opacity-100" : "opacity-50"
                    } w-full text-center`}
                  >
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 px-2">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeetStepsGuide;