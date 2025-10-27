import React from 'react'

const MobileSection = () => {
  return (
    <section className="relative overflow-hidden mb-10">
  <div className="max-w-7xl mx-auto lg:px-6 px-4 z-10">
    <div className="[background:linear-gradient(270.01deg,_#0B8E92_-7.41%,_#1EE495_99.99%)] [box-shadow:0px_2px_24px_0px_#00000026] lg:p-10 md:p-8 p-5 rounded-2xl relative">
      <div className="absolute right-0 bottom-0 z-1 h-32">
        <img
          src="/ctaapp.png"
          alt="cta"
          className="h-full w-full object-cover overflow-hidden"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 items-center">
        <div>
          <div>
            <img src="/app.png" alt="app mobile" />
          </div>
          <div className="md:text-3xl text-2xl font-light text-[#06241B] text-center">
            Download The <span className="font-bold">Visuti Career App</span>
          </div>
          <div className="md:text-sm text-xs text-black text-center">
            New features. New appearance. No risk and credit card required.
          </div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button className="md:h-12 h-9">
              <img
                src="/appstorw.png"
                alt="app"
                className="size-full"
              />
            </button>
            <button className="md:h-12 h-9">
              <img
                src="/googleplay.png"
                alt="app"
                className="size-full"
              />
            </button>
          </div>
        </div>
        <div className="relative z-10 max-sm:text-center">
          <div className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white">
            <span className="text-[#FFFB00] font-extrabold">
              College View -{" "}
            </span>{" "}
            Your Gateway to the Right Campus
          </div>
          <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#FAFAFA] mt-5">
            Explore detailed profiles of top government and private colleges across India, including courses, fees, facilities, placements, and student reviews.
          </div>
          <button className="bg-white px-5 py-3 rounded-2xl font-medium md:text-lg text-sm flex items-center gap-3 sm:mt-10 mt-5 max-sm:mx-auto">
            Explore Colleges{" "}
            <img src="/arrowrightblack.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default MobileSection