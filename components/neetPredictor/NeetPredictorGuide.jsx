import React from 'react';

const NeetPredictorGuide = () => {
  const steps = [
    {
      number: 1,
      text: "Visit NEET college predictor tool"
    },
    {
      number: 2,
      text: "Enter the details such as NEET rank, seat type and phone number"
    },
    {
      number: 3,
      text: "Then, click on 'predict my colleges' tab"
    },
    {
      number: 4,
      text: "The college names will get displayed by the medical college predictor tool"
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 min-h-screen">
      <div className="">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          How To Use <span className="text-teal-500">NEET Predictor?</span>
        </h2>

        {/* First Note */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">Note:</span> Visufi Career's NEET 2026 College Predictor is a helpful tool for medical aspirants to estimate which MBBS and BDS colleges they might get into based on their NEET 2026 percentile. It includes government and private medical colleges across India under both All India Quota (AIQ) and State Quotas. Simply enter your correct percentile to receive a list of possible colleges. The final seat allotment will be conducted by MCC and respective state counseling authorities.
          </p>
        </div>

        {/* Second Note */}
        <div className="mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">Note:</span> Visufi Career's NEET 2026 College Predictor is a helpful tool for medical aspirants to estimate which MBBS and BDS colleges they might get into based on their NEET 2026 percentile. It includes government and private medical colleges across India under both All India Quota (AIQ) and State Quotas. Simply enter your correct percentile to receive a list of possible colleges.
          </p>
        </div>

        {/* Instructions Paragraph */}
        <div className="mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            Students are advised to keep their NEET percentile or rank ready before using the NEET college predictor tool. Candidates can use the NEET 2026f College Predictor by following a few simple steps.
          </p>
        </div>

        {/* Steps Section */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              
              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[19px] mt-10 w-0.5 h-12 bg-gradient-to-b from-teal-400 to-teal-300"></div>
              )}
              
              {/* Step Text */}
              <div className="flex-1 pt-2">
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeetPredictorGuide;