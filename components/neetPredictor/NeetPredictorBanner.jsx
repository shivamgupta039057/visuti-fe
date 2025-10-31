"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NeetPredictorBanner = () => {
    const [step, setStep] = useState(2);
  const [course, setCourse] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative wave patterns */}
      <div className="absolute top-8 left-8 opacity-30">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path d="M0 20C10 10, 20 10, 30 20C40 30, 50 30, 60 20C70 10, 80 10, 80 20" stroke="white" strokeWidth="3" fill="none"/>
          <path d="M0 30C10 20, 20 20, 30 30C40 40, 50 40, 60 30C70 20, 80 20, 80 30" stroke="white" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      {/* Decorative dots pattern */}
      <div className="absolute bottom-12 left-12 grid grid-cols-6 gap-3 opacity-20">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
        ))}
      </div>

      <div className="max-w-6xl w-full flex flex-col pt-18 md:pt-50 md:flex-row items-center gap-8 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Step-by-Step Guide<br />to Your College 
          </h1>
          <p className="text-lg opacity-90 max-w-md">
            Fill out each step one by one and get accurate college predictions with ease.
          </p>
          <div className="inline-block">
            <span className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
              #StepIntoSuccess
            </span>
          </div>
        </div>

        {/* Right Form Card - Stacked Effect */}
        <div className="flex-1 relative w-full max-w-lg">
          {/* Background cards for stacked effect */}
          <div className="absolute top-4 right-4 w-full h-full bg-teal-700 rounded-2xl opacity-40 transform rotate-2"></div>
          <div className="absolute top-2 right-2 w-full h-full bg-teal-600 rounded-2xl opacity-60 transform rotate-1"></div>
          
          {/* Main Form Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((num) => (
                <React.Fragment key={num}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      num <= step 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {num}
                    </div>
                  </div>
                  {num < 4 && (
                    <div className={`flex-1 h-0.5 mx-2 transition-all ${
                      num < step ? 'bg-teal-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Form Content */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Step {step}/4
                </label>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Course and Specialization
                </h2>
              </div>

              {/* Select Course Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Course
                </label>
                <div className="relative">
                  <select 
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-blue-500 rounded-lg appearance-none focus:outline-none focus:border-blue-600 text-gray-700 cursor-pointer"
                  >
                    <option value="">MBBS</option>
                    <option value="btech">B.Tech</option>
                    <option value="bsc">B.Sc</option>
                    <option value="bba">BBA</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Select Specialization Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Specialization
                </label>
                <div className="relative">
                  <select 
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-teal-500 text-gray-400 cursor-pointer"
                  >
                    <option value="">Select Specialization</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 gap-4">
                <button
                  onClick={handlePrevious}
                  disabled={step === 1}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                    step === 1
                      ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                      : 'text-teal-600 bg-white border-2 border-teal-600 hover:bg-teal-50'
                  }`}
                >
                  Previous Step
                </button>
                <button
                  onClick={handleNext}
                  disabled={step === 4}
                  className={`px-8 py-2.5 rounded-lg font-medium transition-all ${
                    step === 4
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                  }`}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeetPredictorBanner