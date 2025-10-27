"use client";
import React, { useState } from 'react';

const NeetStepsGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Understand types of ILETS Exam",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Find a Test Center",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Choose your Test Center",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Register Online",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
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
    <div className="bg-gray-50 p-4 md:p-8">
      <div className="w-full max-w-full w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to use the <span className="text-teal-500">NEET PG 2026</span> College Predictor 2026?
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentStep === steps.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-teal-500 text-white hover:bg-teal-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Line and Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
            <div 
              className="h-full bg-teal-500 transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start" style={{ width: `${100 / steps.length}%` }}>
                {/* Circle */}
                <div className="relative z-10 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      index <= currentStep
                        ? 'bg-teal-500 text-white'
                        : 'bg-white border-4 border-gray-200 text-gray-400'
                    }`}
                  >
                    {index <= currentStep ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    )}
                  </div>
                </div>

                {/* Step Content */}
                <div className={`transition-opacity duration-300 ${index === currentStep ? 'opacity-100' : 'opacity-40'}`}>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 pr-4">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed pr-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeetStepsGuide;