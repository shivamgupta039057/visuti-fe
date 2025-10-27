import { ShieldCheck } from "lucide-react";
import React from "react";

export default function AIFeatureGrid() {
  return (
    <>
    <section>
       <div className="max-w-7xl mx-auto relative lg:px-6 px-4">
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center mb-10">
              <h2 className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl text-center capitalize">
                benefits of <span className="text-primary font-semibold">AI NEET</span>   predictor
              </h2>
              <p className="md:font-medium md:text-base sm:text-sm text-xs text-muted text-center sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
              Smarter decisions, faster results—powered by AI
              </p>
          </div>
        </div>
    </section>
      <section className=" py-12 relative z-10">
        <div className="absolute inset-0 h-full -z-1"><img src="/App.png" alt="App" className="object-cover size-full" /></div>
        <div className="max-w-7xl lg:px-6 px-4 mx-auto grid lg:grid-cols-4 gap-6">
          {/* LEFT BIG CARD */}
          <div className="bg-[#F2FBED] rounded-[10px] border border-[#2A3A2A] p-8 flex flex-col items-center justify-center shadow-md text-center relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-[url('/circuit-bg.png')] bg-cover bg-center opacity-10"></div> */}
            <div className="relative z-10">
              <img src="/ai.png" alt="ai" className="mx-aut0" />
              <h3 className="text-lg font-semibold text-black ">
                AI College Predictor
              </h3>
              <p className="text-sm text-muted mt-2">
                Our platform utilizes the latest AI algorithms to predict colleges.
              </p>
            </div>
          </div>

          {/* MIDDLE LEFT TWO SMALL BOXES */}
          <div className="flex flex-col gap-6">
            {/* 100% Accuracy */}
              <div className="bg-[#EAF3FF] h-full rounded-[10px] p-4 flex gap-3 items-start justify-center shadow-sm border border-[#DCE9FF] ">
          {/* Icon */}
          <div className="bg-[#D8FFF1] p-2 rounded-lg mb-3">
              <ShieldCheck className="w-5 h-5 text-[#20B486]" />
          </div>
              <div>
                  {/* Percentage */}
                  <h2 className="text-[#0B9444] text-5xl leading-none">100%</h2>

                  {/* Title */}
                  <h3 className="text-black font-semibold text-base mt-1">
                      Accuracy Level
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-xs mt-1">
                      AI encryption keeps your data safe.
                  </p>
              </div>
              </div>

              {/* 5-Year Report */}
              <div className="bg-[#F7EBFF] h-full rounded-[10px] p-4 flex gap-3 items-start justify-center shadow-sm border border-[#2A3A2A]">
                  {/* Icon */}
                  <div className=" mb-3">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 14C0 6.26801 6.26801 0 14 0H34C41.732 0 48 6.26801 48 14V34C48 41.732 41.732 48 34 48H14C6.26801 48 0 41.732 0 34V14Z" fill="#00FF88" fill-opacity="0.2"/>
                          <path d="M24 18V24L28 26" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#00FF88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                  <div>
                      {/* Percentage */}
                      <h2 className="text-[#0B9444] text-5xl leading-none">5-Year</h2>

                      {/* Title */}
                      <h3 className="text-black font-semibold text-base mt-1">
                          complete Budget Report
                      </h3>

                      {/* Description */}
                      <p className="text-muted text-xs mt-1">
                          Track activity and get security analytics 24/7.
                      </p>
                  </div>
              </div>
          </div>

          {/* CENTER BIG CARD */}
        <div className="bg-[#F2FBED] rounded-[10px] border border-[#2A3A2A] p-8 flex flex-col items-center justify-center shadow-md text-center relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-[url('/circuit-bg.png')] bg-cover bg-center opacity-10"></div> */}
            <div className="relative z-10">
              <img src="/SpeedometerGauge.png" alt="ai" className="mx-auto" />
              <h3 className="text-lg font-semibold text-black mt-10">
                round wise analysis report
              </h3>
              <p className="text-sm text-muted mt-2">
            Get alerts on threats and prevent them before they cause damage.
              </p>
            </div>
          </div>

          {/* RIGHT TWO SMALL BOXES */}
          <div className="flex flex-col gap-6">
            {/* 100% Accuracy */}
              <div className="bg-[#EAF3FF] h-full rounded-[10px] p-4 flex gap-3 items-start justify-center shadow-sm border border-[#DCE9FF]">
        
              <div>

                  {/* Title */}
                  <h3 className="text-black font-semibold text-base mt-1">
                      region wise college details
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-xs mt-1">
                  AI detects threats and notifies you immediately to protect your data.
                  </p>
              </div>
              </div>

              {/* 5-Year Report */}
              <div className="bg-[#F7EBFF] relative h-full rounded-[10px] p-4 flex gap-3 items-start justify-center shadow-sm border border-[#2A3A2A] ">
                  <div className="absolute right-4 bottom-4">
                      <svg width="49" height="58" viewBox="0 0 49 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M24.4998 4.14282L40.8332 12.4285V29C40.8332 40.0476 35.3887 48.3333 24.4998 53.8571C13.6109 48.3333 8.1665 40.0476 8.1665 29V12.4285L24.4998 4.14282Z" fill="url(#paint0_linear_1_15868)"/>
                          <path opacity="0.6" d="M24.5 8.28564L36.75 14.4999V28.9999C36.75 37.2856 32.6667 43.4999 24.5 47.6428C16.3333 43.4999 12.25 37.2856 12.25 28.9999V14.4999L24.5 8.28564Z" fill="url(#paint1_linear_1_15868)"/>
                          <path d="M24.5 10.3572L34.7083 15.7429V29C34.7083 35.9048 31.3056 41.1524 24.5 44.7429C20.4167 41.1524 18.375 37.2857 18.375 33.1429V15.7429L24.5 10.3572Z" fill="url(#paint2_linear_1_15868)"/>
                          <path opacity="0.3" d="M20.4165 28.9999C23.7992 28.9999 26.5415 24.3629 26.5415 18.6428C26.5415 12.9227 23.7992 8.28564 20.4165 8.28564C17.0338 8.28564 14.2915 12.9227 14.2915 18.6428C14.2915 24.3629 17.0338 28.9999 20.4165 28.9999Z" fill="black"/>
                          <defs>
                          <linearGradient id="paint0_linear_1_15868" x1="8.1665" y1="4.14282" x2="8.1665" y2="4975.57" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00FF88" stop-opacity="0.8"/>
                          <stop offset="1" stop-color="#00AA55" stop-opacity="0.9"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_1_15868" x1="12.25" y1="8.28564" x2="12.25" y2="3944" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00FF88" stop-opacity="0.8"/>
                          <stop offset="1" stop-color="#00AA55" stop-opacity="0.9"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_1_15868" x1="18.375" y1="10.3572" x2="18.375" y2="3448.93" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00FF88" stop-opacity="0.8"/>
                          <stop offset="1" stop-color="#00AA55" stop-opacity="0.9"/>
                          </linearGradient>
                          </defs>
                      </svg>

                  </div>
                  <div>
                      {/* Percentage */}
                      <h2 className="text-[#0B9444] text-5xl leading-none">5-Year</h2>

                      {/* Title */}
                      <h3 className="text-black font-semibold text-base mt-1">
                        secure & private
                      </h3>

                      {/* Description */}
                      <p className="text-muted text-xs mt-1">
                      Your data is protected by technology that meets global security standards.
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
