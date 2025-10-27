import React from "react";

const predictorOptions = [
  { title: "NEET UG", href: "#", highlight: false },
  { title: "NEET UG", href: "#", highlight: false },
  { title: "NEET UG", href: "#", highlight: true },
  { title: "NEET UG", href: "#", highlight: false },
  { title: "NEET UG", href: "#", highlight: false },
];

const PredictorFeatureneet = () => {
  return (
    <section className="relative">
      <div className="relative border border-[#CDEAE3] bg-[#F4FFFC] shadow-[0_22px_45px_rgba(8,82,65,0.12)]">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/neetpredictorbg.png"
            alt="NEET predictor background"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/60" /> */}

          <div className="max-w-7xl mx-auto relative lg:px-6 px-4">
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center sm:px-10 md:py-16">
              <h2 className="text-2xl font-semibold text-[#071926] sm:text-3xl md:text-[36px]">
                NEET UG 2026 College Predictor
              </h2>
              <p className="mt-3 inline-flex items-center rounded-full border border-dashed border-[#0AB89D] bg-white/80 px-5 py-1.5 text-xs font-medium text-[#4A5F6B] sm:text-sm">
                AIQ, State Quota &amp; E-Books by Visuti Career
              </p>

              <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4">
                {predictorOptions.map((option, index) => {
                  const highlightClasses = option.highlight
                    ? "border-[#20B486] bg-white text-black shadow-[0_14px_28px_rgba(22,185,137,0.28)]"
                    : "border-[#D4EBE4] bg-white/90 text-[#0F2E3A] hover:border-[#16B989] hover:text-[#16B989]";

                  const trailingIconClasses = option.highlight
                    ? "bg-white text-[#16B989]"
                    : "bg-[#E6F5F1] text-[#16B989] group-hover:bg-[#16B989] group-hover:text-white";

                  return (
                    <a
                      key={`${option.title}-${index}`}
                      href={option.href}
                      className={`group flex min-w-[150px] items-center gap-3 rounded-[10px] bg-white border border-[#20B486] p-[10px] text-sm font-semibold transition duration-200 sm:min-w-[170px] sm:text-base `}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                        <img
                          src="/PenNib.png"
                          alt="predictor icon"
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                      <span className="tracking-wide">{option.title}</span>
                      <span
                        className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-200 bg-[#20B486]`}
                      >
                        <img
                          src="/ArrowUpRightwhite.png"
                          alt="arrow"
                          className="h-4 w-4 object-contain"
                        />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
      
      </div>
    </section>
  );
};

export default PredictorFeatureneet;
