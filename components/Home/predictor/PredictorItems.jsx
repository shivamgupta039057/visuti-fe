import React from "react";

const PredictorItems = () => {
  return (
    <>
      <section className="relative md:py-16 py-10">
        <div className="absolute inset-0 -z-10 max-md:hidden">
          <img
            src="/Gateway.png"
            alt="hero-banner"
            className="h-full w-full object-cover overflow-hidden"
          />
        </div>
        <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            <div className="grid grid-cols-1 lg:gap-12 md:gap-8 gap-5 ">
              <div className=" sm:max-w-sm w-full mx-auto md:border-[3px] border border-[#20B486] rounded-xl md:p-5 p-4 shadow-sm">
                {/* Content */}
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <img
                    src="/no-education_9030088 1.png"
                    alt="icon"
                    className="w-8 h-8"
                  />
                  <div>
                    {/* Title */}
                    <h3 className="font-bold md:text-lg text-base text-black">
                      For NEET UG Aspirants
                    </h3>
                    {/* Description */}
                    <p className="md:text-sm text-xs   text-black mt-1 leading-relaxed">
                      Access personalized college predictions, state-wise reports, and round-wise cutoff trends to secure your best MBBS seat.
                    </p>
                    {/* Button */}
                    <div className="mt-5">
                      <button className="bg-[#20B486] text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-[#1a8a68] transition">
                        NEET UG Predictor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" sm:max-w-sm w-full mx-auto md:border-[3px] border border-[#20B486] rounded-xl md:p-5 p-4 shadow-sm">
                {/* Content */}
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <img
                    src="/no-education_9030088 1.png"
                    alt="icon"
                    className="w-8 h-8"
                  />
                  <div>
                    {/* Title */}
                    <h3 className="font-bold md:text-lg text-base text-black">
                      For NEET PG Aspirants
                    </h3>
                    {/* Description */}
                    <p className="md:text-sm text-xs   text-black mt-1 leading-relaxed">
                      Get accurate college predictions, state-wise insights, and round-wise cutoff updates for your ideal MD/MS seat.
                    </p>
                    {/* Button */}
                    <div className="mt-5">
                      <button className="bg-[#20B486] text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-[#1a8a68] transition">
                        NEET PG Predictor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" sm:max-w-sm w-full mx-auto md:border-[3px] border border-[#20B486] rounded-xl md:p-5 p-4 shadow-sm">
                {/* Content */}
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <img
                    src="/no-education_9030088 1.png"
                    alt="icon"
                    className="w-8 h-8"
                  />
                  <div>
                    {/* Title */}
                    <h3 className="font-bold md:text-lg text-base text-black">
                      For IIT Aspirants
                    </h3>
                    {/* Description */}
                    <p className="md:text-sm text-xs   text-black mt-1 leading-relaxed">
                      Plan your IIT journey with tailored college predictions, state-wise data, and round-wise cutoff trends.
                    </p>
                    {/* Button */}
                    <div className="mt-5">
                      <button className="bg-[#20B486] text-white text-xs font-medium px-5 py-2 rounded-full hover:bg-[#1a8a68] transition">
                        IIT Predictor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:bg-[#20B486] p-4">
              <div className="text-white lg:text-[48px] md:text-4xl sm:text-3xl text-2xl/5 leading-snug font-semibold">
                Your Gateway to NEET  <br /> & IIT Admissions
              </div>
              <div className="lg:text-lg md:text-base sm:text-sm text-xs font-medium text-white max-w-md mt-4">
                Access smart tools, accurate reports, and expert guidance to excel in NEET UG, NEET PG, and IIT exams with confidence.
              </div>
              <div className="py-14">
                <img src="/chart.png" alt="" />
              </div>
              <div className="flex justify-between items-center">
                <button className="text-[#1E3636] lg:text-xl md:text-lg sm:text-base text-xs font-medium md:px-5 px-3 pr-4 md:py-3 py-2 rounded-lg bg-white flex items-center">
                  Get Started{" "}
                  <span className="md:size-6 size-4">
                    <img src="/arrow-up-02-sharp.png" alt="" />
                  </span>
                </button>
                <div className="text-white/50 font-medium lg:text-xl md:text-lg sm:text-base text-xs">
                  100% Satisfaction Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PredictorItems;
