import React from "react";

const AboutCertifications = () => {
  const certifications = [
    "/certifications1.png",
    "/certifications2.png",
    "/certifications3.png",
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-secondary font-bold text-3xl sm:text-4xl md:text-5xl capitalize">
            Our <span className="text-primary font-bold">Certifications</span>
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((img, index) => (
            <div
              key={index}
              className=" flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Certification ${index + 1}`}
                className="w-full  object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutCertifications;
