import React from "react";

const AboutStory = () => {
  const stats = [
    { 
      number: "500+", 
      label: "Projects Completed", 
      bgColor: "bg-primary", 
      textColor: "text-white" 
    },
    { 
      number: "50+", 
      label: "Team Members", 
      bgColor: "bg-gray-200", 
      textColor: "text-secondary" 
    },
    { 
      number: "15+", 
      label: "Countries Served", 
      bgColor: "bg-gray-200", 
      textColor: "text-secondary" 
    },
    { 
      number: "98%", 
      label: "Client Satisfaction", 
      bgColor: "bg-gray-200", 
      textColor: "text-secondary" 
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-secondary font-bold text-3xl sm:text-4xl md:text-5xl">
              Our Story
            </h2>

            <div className="space-y-4 text-[#717182] text-sm sm:text-base leading-relaxed">
              <p>
                Founded in 2020, we set out with a simple mission: to transform
                how businesses connect with their customers through innovative
                technology and thoughtful design.
              </p>
              <p>
                What started as a small team of five has grown into a thriving
                community of creative thinkers, engineers, and problem-solvers.
                We're united by our passion for excellence and our commitment to
                making a positive impact.
              </p>
              <p>
                Today, we're proud to serve clients across the globe, helping
                them navigate the digital landscape and achieve their goals
                through cutting-edge solutions and unwavering support.
              </p>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 self-start">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`
                  ${stat.bgColor}
                  ${stat.textColor}
                  h-[150px]
                  rounded-2xl
                  p-6
                  flex
                  flex-col
                 
                  items-start
                `}
              >
                <div className={`text-4xl font-bold mb-3 ${stat.textColor}`}>
                  {stat.number}
                </div>

                <div
                  className={`text-base ${
                    stat.bgColor === "bg-primary"
                      ? "text-white"
                      : "text-secondary"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
