import React from 'react';

const NeetBenefitsSection = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            NEET PG 2026 Predictor <span className="text-teal-500">Benefits</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            From cut-offs to admission chances, get it all in one place. Stay ahead in your NEET PG 2026 preparation journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Feature - Live Counseling Support */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="h-48 md:h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop" 
                alt="Toronto skyline" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Live Counseling Support Available
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Sed do eiusmod tempor incididunt ut labore et dolore magnaealiqua. Ut eni
              </p>
            </div>
          </div>

          {/* Right Column - Two Smaller Features */}
          <div className="flex flex-col gap-6">
            {/* Data Privacy Feature */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-40 sm:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop" 
                  alt="Canadian flag with mountains" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-5">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Data Privacy And Security Compliance
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>
              </div>
            </div>

            {/* Counselors Feature */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-40 sm:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                  alt="Lighthouse landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-5">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Counselors With 10+ Years Of Experince
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeetBenefitsSection;