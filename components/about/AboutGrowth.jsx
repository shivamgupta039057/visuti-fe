import React from "react";
import { Banknote, Building2, Users } from "lucide-react";

const AboutGrowth = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#0B2025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-5 text-white text-left">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-snug sm:leading-tight">
              Real Growth.
              Real Returns.
              Real Investors.
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed text-[#F6F7F9]">
              <p>
                We're on a mission to democratize medical education counseling.
                At Visuti Career, we make quality guidance accessible through
                AI-powered predictions — powered by data, backed by trust, and
                built for student success.
              </p>
              <p>
                To be India's most trusted platform for medical education
                counseling, where every student — from beginner to pro — can
                achieve their MBBS dreams with confidence.
              </p>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="bg-[#444E5D] rounded-2xl overflow-hidden w-full max-w-md mx-auto lg:mx-0 lg:ml-20">

            {/* Card */}
            {[
              { icon: <Banknote />, value: "100 Cr+", label: "Invested" },
              { icon: <Building2 />, value: "150+", label: "Properties Listed" },
              { icon: <Users />, value: "10,000+", label: "Active Investors" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 flex items-center gap-4 sm:gap-5 ${
                  idx !== 2 ? "border-b border-white/20" : ""
                }`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7 text-white",
                  })}
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm sm:text-base text-white/70">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowth;
