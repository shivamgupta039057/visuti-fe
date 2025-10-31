import React from "react";
import { Play } from "lucide-react";

const NeetAboutPage = () => {
  return (
    <>
      <div className="bg-white p-1 md:p-8 flex items-center justify-center">
        <div className="md:py-16 py-10 max-w-7xl mx-auto lg:px-6 px-4 relative w-full">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <img
                src="/Subtract.png"
                alt="Bridge at sunset"
                className="w-full h-64 rounded-lg md:h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-100 transition border-4 border-[#ddd] w-20 h-20 md:w-[85px] md:h-[80px]">
                  <Play className="text-teal-500" size={30} />
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 px-1 py-2 md:px-8 md:py-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                How Our <span className="text-teal-500">NEET PG 2026</span>{" "}
                College Predictor Work?
              </h1>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                NEET College Predictor 2026 is designed to assist the candidates
                in predicting their chances of admission to top Medical, dental
                ayush and all other medical courses based on students NEET
                scores. NEET College Predictor 2026 covers the previous years
                NEET cut off data.
              </p>

              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                To provide the list of the most suitable medical/ dental
                colleges in India, Visat4career NEET College Predictor uses
                opening and closing ranks derived from the seat allotment result
                of NEET counselling.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Expert Guidance */}
                <div className="flex flex-col items-start shadow-md p-4 rounded-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                    <svg
                      className="w-7 h-7 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Receive personalised counseling from experienced
                    professionals dedicated to your success.
                  </p>
                </div>

                {/* Proven Results */}
                <div className="flex flex-col items-start shadow-md p-4 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <svg
                      className="w-7 h-7 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    Proven Results
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our track record ensures high success rates in university
                    placements and visa approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeetAboutPage;
