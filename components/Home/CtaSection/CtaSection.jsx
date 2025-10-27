import React from 'react'

const CtaSection = () => {
  return (
   <section className="relative py-10 bg-[#f5f8ff]">
  <div className="absolute inset-0 z-1 lg:h-[180px]">
    <img
      src="/cta.png"
      alt="cta"
      className="h-full w-full object-cover overflow-hidden"
    />
  </div>
  <div className="max-w-5xl ms-auto lg:px-6 px-4 z-10 relative text-end flex items-center justify-end lg:flex-row flex-col gap-5">
    <div className="lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold text-white leading-normal">
      Talk to Our <span className="font-extrabold text-[#263830]">Experts</span>{" "}
      for <br />{" "}
      <span className="bg-white sm:p-2 p-1 rounded-lg font-extrabold text-[#263830]">
        for Smarter 
      </span>{" "}
      Career Decisions
    </div>
    <button className="flex items-center justify-start text-left gap-2 bg-white rounded-lg p-2 mx-auto">
      <div className="shrink-0">
        <img
          alt=""
          src="/phone.png"
          className="size-10 bg-white rounded-full"
        />
      </div>
      <div className="flex-1 flex-col truncate ">
        <span className="sm:text-sm text-xs font-semibold text-black text-left">
          call us for counseling
        </span>{" "}
        <br />
        <span className="text-black font-semibold text-left sm:text-sm text-xs">
          +91 (914) 587-9646
        </span>
      </div>
    </button>
  </div>
</section>

  )
}

export default CtaSection