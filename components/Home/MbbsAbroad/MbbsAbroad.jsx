import React from "react";

const MbbsAbroad = () => {
  return (
    <>
      <section className="relative py-10 bg-[#f5f8ff] ">
        <div className="absolute inset-0 z-1">
          <img
            src="/mbbsabroad.png"
            alt="hero-banner"
            className="h-full w-full object-cover overflow-hidden"
          />
        </div>
        <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10 relative">
          {/* Heading */}
          <div className="text-[#2B2B3D] font-semibold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center capitalize">
            MBBS <span className="font-bold text-[#20B486]"> Abroad</span>
          </div>
          {/* Paragraph */}
          <div className="md:font-medium md:text-base sm:text-sm text-xs text-[#9A98A9] text-center sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
            Get expert guidance for affordable and globally recognized MBBS programs overseas.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:my-10 my-5 ">
            <div className="md:border-2 border-[1px] border-dashed  border-black/50 bg-white rounded-lg bg-white p-4 flex items-center justify-center flex-col md:gap-3">
              <img
                src="/Russia.png"
                alt="russia"
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                Russia
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1  text-[10px]">
                7+ universities
              </div>
            </div>
            <div className="md:border-2 border-[1px] border-dashed  border-black/50 bg-white rounded-lg bg-white p-4 flex items-center justify-center flex-col md:gap-3">
              <img
                src="/nepal.png"
                alt="nepal"
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                nepal
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1  text-[10px]">
                7+ universities
              </div>
            </div>
            <div className="md:border-2 border-[1px] border-dashed  border-black/50 bg-white rounded-lg bg-white p-4 flex items-center justify-center flex-col md:gap-3">
              <img
                src="/georgia.png"
                alt="georgia"
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                georgia
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1  text-[10px]">
                7+ universities
              </div>
            </div>
            <div className="md:border-2 border-[1px] border-dashed  border-black/50 bg-white rounded-lg bg-white p-4 flex items-center justify-center flex-col md:gap-3">
              <img
                src="/kyrgyzstan.png"
                alt="kyrgyzstan"
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                kyrgyzstan
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1  text-[10px]">
                7+ universities
              </div>
            </div>
            <div className="md:border-2 border-[1px] border-dashed  border-black/50 bg-white rounded-lg bg-white p-4 flex items-center justify-center flex-col md:gap-3">
              <img
                src="/kazakhstan.png"
                alt="kazakhstan"
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                kazakhstan
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1  text-[10px]">
                7+ universities
              </div>
            </div>
            <div className="md:border-2 border-[1px] border-dashed  border-black/50 bg-white rounded-lg bg-white p-4 flex items-center justify-center flex-col md:gap-3">
              <img
                src="/tajikistan.png"
                alt="tajikistan"
                className="lg:w-[100px] sm:w-20 w-16 lg:h-[100px] sm:h-20 h-16 rounded-full"
              />
              <div className="font-semibold text-black md:text-lg/4 text-base/2 capitalize mt-3">
                tajikistan
              </div>
              <div className="text-[#636363] font-medium md:text-xs/1  text-[10px]">
                7+ universities
              </div>
            </div>
          </div>
          <div>
            <div className="capitalize text-2xl font-semibold text-[#2B2B3D]">
              explore universities and colleges in{" "}
              <span className="text-[#2D814A]">india</span> and{" "}
              <span className="text-[#2D814A]">abroad</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3 my-5">
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    NEET UG
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    NEET PG
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    IIT
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    MBBS
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    BDS
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    Bams
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    bsc nursing
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
              <div className="md:px-5 px-3 md:py-4 py-1.5 rounded-lg border border-[#DDDDDD] bg-white [box-shadow:0px_3px_12px_0px_#4B4B4B14] transition group/neet hover:border-[#20B486] flex items-center cursor-pointer">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="text-black md:text-xl sm:text-lg text-sm font-medium flex items-center gap-3 uppercase">
                    <span className="md:size-8 size-5 flex items-center justify-center">
                      <img
                        src="/PenNib.png"
                        alt="PenNib"
                        className="w-6 h-6"
                      />
                    </span>
                    mbbs abroad
                  </div>
                </div>
                {/* Right Arrow */}
                <div className="shrink-0 bg-white [box-shadow:-4px_4px_20px_0px_#20B4861F] md:size-10 size-8 rounded-lg flex items-center justify-center transition group-hover/neet:bg-[#20B486]">
                  <img
                    src="/ArrowUpRight.png"
                    alt="arrow"
                    className="w-5 h-5 transition group-hover/neet:invert group-hover/neet:brightness-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-start gap-4 bg-[#2A4A45] rounded-lg p-2 mx-auto sm:mt-10 mt-7">
            <div className="shrink-0">
              <img
                alt=""
                src="/elements.png"
                className="md:size-10 size-8 p-2 bg-white rounded-full"
              />
            </div>
            <div className="flex-1 flex-col truncate ">
              <span className="text-sm font-semibold text-white text-left">
                call us for counseling
              </span>{" "}
              <br />
              <span className="text-white font-semibold text-white text-left">
                +91 (914) 587-9646
              </span>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default MbbsAbroad;
