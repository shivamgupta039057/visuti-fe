import React from "react";

const Certified = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto lg:px-6 px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[10px] [box-shadow:0px_0px_14px_0px_#00000026] md:p-6 sm:p-4 p-3 flex flex-col lg:flex-row items-center justify-between md:gap-8 gap-5">
          {/* Left Logos */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h3 className="text-black font-bold text-lg">Certified By :-</h3>
            <div className="flex items-center md:gap-6 gap-4">
              <img
                src="/iso.png"
                alt="ISO"
                className="md:h-16 h-12"
              />
              <img
                src="/satymay.png"
                alt="Gov"
                className="md:h-16 h-12"
              />
              <img
                src="/startupindia.png"
                alt="Startup India"
                className="md:h-16 h-12"
              />
            </div>
          </div>
          {/* Divider */}
          <div className="w-[200px] lg:w-[1px] h-[1px] lg:h-[100px] bg-gray-100/10  border border-gray-100" />
          {/* Stats Grid */}
          <div className="grid grid-cols-4 sm:gap-6 gap-4 text-center flex-1">
            <div className="flex flex-col items-center">
              <div className="sm:w-10 w-9 sm:h-10 h-9 flex items-center justify-center border border-[#AED2C6] bg-[#E9F8F3] text-primary rounded-xl mb-2 p-2">
                <img src="/GraduationCapgreen.png" alt="" />
              </div>
              <p className="md:text-xl sm:text-base text-sm font-bold text-[#2E4D3E]">
                10+
              </p>
              <p className="sm:text-xs text-[10px] text-[#2E4D3E]">
                Years Of Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="sm:w-10 w-9 sm:h-10 h-9 flex items-center justify-center border border-[#EDE4DB] bg-[#FFFAF5] text-primary rounded-xl mb-2 p-2">
                <img src="/GraduationCapgreen.png" alt="" />
              </div>
              <p className="md:text-xl sm:text-base text-sm font-bold text-[#2E4D3E]">
                790+
              </p>
              <p className="sm:text-xs text-[10px] text-[#2E4D3E]">
                universities tie ups
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="sm:w-10 w-9 sm:h-10 h-9 flex items-center justify-center border border-[#F6C5CB] bg-[#FFEEF0] text-primary rounded-xl mb-2 p-2">
                <img src="/GraduationCapgreen.png" alt="" />
              </div>
              <p className="md:text-xl sm:text-base text-sm font-bold text-[#2E4D3E]">
                5,0,000+
              </p>
              <p className="sm:text-xs text-[10px] text-[#2E4D3E]">
                Students Impacted
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="sm:w-10 w-9 sm:h-10 h-9 flex items-center justify-center border border-[#D8EAFE] bg-[#F0F7FF] text-primary rounded-xl mb-2 p-2">
                <img src="/GraduationCapgreen.png" alt="" />
              </div>
              <p className="md:text-xl sm:text-base text-sm font-bold text-[#2E4D3E]">
                80+
              </p>
              <p className="sm:text-xs text-[10px] text-[#2E4D3E]">
                Expert Counselors
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certified;
