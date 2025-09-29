import React from "react";

const ChoiceFillingMaker = () => {
  return (
    <>
      <section className="relative pt-10 pb-0">
        <div className="absolute left-0 top-10 -z-10 max-md:hidden">
          <img
            src="/dots.png"
            alt="hero-banner"
            className="md:h-4 h-30 w-full object-cover overflow-hidden"
          />
        </div>
        <div className="absolute right-0 top-20 -z-10 max-md:hidden">
          <img
            src="/dots2.png"
            alt="hero-banner"
            className="md:h-4 h-30 w-full object-cover overflow-hidden"
          />
        </div>
        <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10">
          {/* Heading */}
          <div className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl text-center capitalize">
            aI <span className="font-bold text-primary"> choice</span> filling
            maker
          </div>
          {/* Paragraph */}
          <div className="md:font-medium md:text-base sm:text-sm text-xs text-muted text-center sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut etiam
            maecenas posuere ultricies dis tempus magna mi id. Morbi a eu erat
            fringilla.
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-5 md:mt-10 mt-5">
            <div className="sm:size-[500px]">
              <img src="/aichoosise.png" alt="ai" />
            </div>
            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                <div className="bg-white [box-shadow:0px_1px_14px_0px_#00000026] p-4 rounded-xl">
                  <div>
                    <img
                      src="/united-states-americ.png"
                      alt="united-states-americ"
                      className="size-8"
                    />
                  </div>
                  <div className="md:text-3xl sm:text-2xl text-xl font-bold text-black capitalize">
                    State Quota
                  </div>
                  <div className="text-[10px] text-[#3C3C3C]">
                    NEET UG/ NEET PG
                  </div>
                  <div className="text-base text-black mt-3">
                    Explore detailed state-wise NEET counseling rules, seat reservations, distribution, and State Quota admission procedures.
                  </div>
                  <button className="bg-primary text-xs font-semibold text-white mt-4 px-5 py-2.5 rounded-xl ">
                    Check Eligibility &amp; Seats
                  </button>
                </div>
                <div className="bg-white [box-shadow:0px_1px_14px_0px_#00000026] p-4 rounded-xl">
                  <div>
                    <img
                      src="/india.png"
                      alt="united-states-americ"
                      className="size-8"
                    />
                  </div>
                  <div className="md:text-3xl sm:text-2xl text-xl font-bold text-black capitalize">
                    all india quota
                  </div>
                  <div className="text-[10px] text-[#3C3C3C]">
                    NEET UG/ NEET PG
                  </div>
                  <div className="text-base text-black mt-3">
                    Explore All India Quota counseling rules, seat reservations, distribution, and admission procedures for NEET UG and PG.
                  </div>
                  <button className="bg-primary text-xs font-semibold text-white mt-4 px-5 py-2.5 rounded-xl ">
                    Check Eligibility &amp; Seats
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex items-center gap-3">
                  <span className="md:h-4 h-3">
                    <img
                      src="/check.png"
                      alt="check"
                      className="size-full"
                    />
                  </span>
                  <span className="md:text-base sm:text-sm text-xs font-medium text-black">
                    100% Verified AIQ & State Quota
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="md:h-4 h-3">
                    <img
                      src="/check.png"
                      alt="check"
                      className="size-full"
                    />
                  </span>
                  <span className="md:text-base sm:text-sm text-xs font-medium text-black">
                    Round-wise Choice Filling Guidance
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="md:h-4 h-3">
                    <img
                      src="/check.png"
                      alt="check"
                      className="size-full"
                    />
                  </span>
                  <span className="md:text-base sm:text-sm text-xs font-medium text-black">
                    AI-Powered College Suggestions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="md:h-4 h-3">
                    <img
                      src="/check.png"
                      alt="check"
                      className="size-full"
                    />
                  </span>
                  <span className="md:text-base sm:text-sm text-xs font-medium text-black">
                    Accurate Cutoffs & Fee Details
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="md:h-4 h-3">
                    <img
                      src="/check.png"
                      alt="check"
                      className="size-full"
                    />
                  </span>
                  <span className="md:text-base sm:text-sm text-xs font-medium text-black">
                    Complete Academic & Bond Information
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="md:h-4 h-3">
                    <img
                      src="/check.png"
                      alt="check"
                      className="size-full"
                    />
                  </span>
                  <span className="md:text-base sm:text-sm text-xs font-medium text-black">
                    Expert Guidance for Top College Selection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoiceFillingMaker;
