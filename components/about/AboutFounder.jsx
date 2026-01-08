import React from "react";

const AboutFounder = () => {
  return (
    <section className="md:py-16 py-10 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Founder Image */}
          <div className="relative w-full">
            <img
              src="/owner.png"
              alt="Anurag Tiwari - Founder & CEO"
              className="w-full h-96 md:h-[550px] rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Founder Desk
            </div>
            <div className="space-y-4 text-muted md:text-base sm:text-sm text-xs leading-relaxed">
              <p>
                MR.ANSHUL TIWARI is the founder &CEOof Visuti career &technologypvt.ltd. as a careercounselor he has 8+ glorious of year excellence. Collect the input and impart it to aspirate focus on providing the best guidance
              </p>
              <p>
I am very much happyto add my presence in the education industry and to establish world-class career counselling services in pan India. our team is also working with a top school,college, and institute to promote their academic programs in pan India by conducting seminars and workshops.
              </p>
              <p>
              I strongly believe that a nation can be great when each and every citizen of the country is well-educated. because education is improvingpeople’s way of thinking and living standards. I am also conducting various social activities. Free career seminars/workshops etc.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-xl font-bold text-secondary">ANSHUL TIWARI</div>
              <div className="text-sm text-muted">Founder & CEO</div>
              <div className="text-sm text-primary font-semibold mt-1">Visuti Edu and tech pvt ltd.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

