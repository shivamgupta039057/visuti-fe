import React from "react";

const PredictorFeature = () => {
  return (
    <section className="relative lg:py-16 md:py-12 py-10 md:pb-24 max-sm:pt-6 ">
      <div className="absolute inset-0 -z-10">
        <img
          src="/neetadminstion-banner.png"
          alt="hero-banner"
          className="h-full w-full object-cover overflow-hidden"
        />
      </div>
      <div className="absolute md:-bottom-3 -bottom-10 md:left-[35%]  -z-10">
        <img
          src="/criclearrow.png"
          alt="hero-banner"
          className="md:h-44 h-36 overflow-hidden"
        />
      </div>
      <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10">
        {/* Heading */}
        <div className="text-[#2B2B3D] font-semibold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center capitalize">
          Predict Your{" "}
          <span className="font-bold text-[#20B486]"> NEET Admission</span>{" "}
          Chances
        </div>
        {/* Paragraph */}
        <div className="md:font-medium md:text-base sm:text-sm text-xs text-[#9A98A9] text-center sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut etiam
          maecenas posuere ultricies dis tempus magna mi id. Morbi a eu erat
          fringilla.
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 items-center">
          <div className="">
            <img src="/NEET-Admission-Chances" alt="neet" />
          </div>
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
              <div className="flex items-center justify-start gap-4 bg-white p-2 border border-[#E1E1E1] rounded-lg transition hover:[box-shadow:0px_1px_16px_0px_#0000001A]">
                <div className="shrink-0 md:w-14 w-10 md:h-14 h-10 rounded-full bg-[#8FFFC9] p-3">
                  <img alt="" src="/college.png" />
                </div>
                <div className="flex flex-col ">
                  <span className="capitalizing md:text-base text-sm font-medium">
                    college level accuracy
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 bg-white p-2 border border-[#E1E1E1] rounded-lg transition hover:[box-shadow:0px_1px_16px_0px_#0000001A]">
                <div className="shrink-0 md:w-14 w-10 md:h-14 h-10 rounded-full bg-[#FFA04C] p-3">
                  <img alt="" src="/Prediction.png" />
                </div>
                <div className="flex flex-col ">
                  <span className="capitalizing md:text-base text-sm font-medium">
                    State + AIQ Predictor
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 bg-white p-2 border border-[#E1E1E1] rounded-lg transition hover:[box-shadow:0px_1px_16px_0px_#0000001A]">
                <div className="shrink-0 md:w-14 w-10 md:h-14 h-10 rounded-full bg-[#5DECEC] p-3">
                  <img alt="" src="/Robot.png" />
                </div>
                <div className="flex flex-col ">
                  <span className="capitalizing md:text-base text-sm font-medium">
                    AI+ human expertise
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 bg-white p-2 border border-[#E1E1E1] rounded-lg transition hover:[box-shadow:0px_1px_16px_0px_#0000001A]">
                <div className="shrink-0 md:w-14 w-10 md:h-14 h-10 rounded-full bg-[#EA85E5] p-3">
                  <img alt="" src="/shield.png" />
                </div>
                <div className="flex flex-col ">
                  <span className="capitalizing md:text-base text-sm font-medium">
                    Trusted &amp; Verified data
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 bg-white p-2 border border-[#E1E1E1] rounded-lg transition hover:[box-shadow:0px_1px_16px_0px_#0000001A]">
                <div className="shrink-0 md:w-14 w-10 md:h-14 h-10 rounded-full bg-[#F4DB7B] p-3">
                  <img alt="" src="/exampreparation.png" />
                </div>
                <div className="flex flex-col ">
                  <span className="capitalizing md:text-base text-sm font-medium">
                    latest year cutoffs
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 bg-white p-2 border border-[#E1E1E1] rounded-lg transition hover:[box-shadow:0px_1px_16px_0px_#0000001A]">
                <div className="shrink-0 md:w-14 w-10 md:h-14 h-10 rounded-full bg-[#FFA9A9] p-3">
                  <img alt="" src="/lockandkey.png" />
                </div>
                <div className="flex flex-col ">
                  <span className="capitalizing md:text-base text-sm font-medium">
                    secure &amp; private
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictorFeature;
