import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { LuAsterisk, LuClock, LuCpu } from "react-icons/lu";

const steps = [
  {
    icon: <LuAsterisk className="text-2xl text-[#ff884d]" />,
    title: "Understand types of ILETS Exam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    background: "linear-gradient(135deg, #FFC89C 0%, #FF78BE 100%)",
  },
  {
    icon: <FaRegEdit className="text-2xl text-black" />,
    title: "Understand types of ILETS Exam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    background: "linear-gradient(135deg, #FFDFF0 0%, #FF75B9 100%)",
  },
  {
    icon: <LuClock className="text-2xl text-[#a86bff]" />,
    title: "Understand types of ILETS Exam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    background: "linear-gradient(135deg, #FFD2EB 0%, #FF85C5 100%)",
  },
  {
    icon: <span className="text-2xl text-white font-bold">A</span>,
    title: "Understand types of ILETS Exam",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt",
    background: "linear-gradient(135deg, #FFD9BA 0%, #FFCD4C 100%)",
  },
];

const ChoiceFillingSteps = () => (
  <div className="w-full bg-[#E3EEFF] lg:py-20 md:py-16 sm:py-12 py-10">
    <div className="max-w-7xl mx-auto lg:px-8 md:px-4 px-4">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white p-3 rounded-xl shadow">
              <LuCpu className="text-2xl text-[#3b4252]" />
            </span>
            <span className="h-2 w-40 sm:w-56 md:w-72 bg-[linear-gradient(90deg,_#FF8904_0%,_#FB64B6_50%,_#FDA5D5_100%)] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-secondary mb-4 max-w-lg leading-normal">
            How to use <span className="text-primary font-bold">Choice Filling Maker?</span>
          </h2>

          <p className="text-[#6A7282] text-sm sm:text-base md:text-lg max-w-xl">
            Our omni-model platform harnesses the power of the latest AI models you've learned and been introduced to, including ChatGPT, LLAMA, Claude, and Gemini. Prefer one model over another? No problem—select it as the primary option for any given task.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center bg-white p-4 sm:p-5 rounded-2xl z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-2xl relative">

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="
                  relative
                  rounded-[24px] sm:rounded-[30px]
                  p-5 sm:p-6 md:p-8
                  min-h-[180px] sm:min-h-[200px] md:min-h-[220px]
                  flex flex-col gap-2
                  border
                  z-20
                "
                style={{
                  background: step.background,
                  border: "2px solid transparent",
                }}
              >
                <div className="mb-2">
                  {step.icon}
                </div>

                <h3 className="text-black font-semibold text-sm sm:text-base mb-1">
                  {step.title}
                </h3>

                <p className="text-[#333333] text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  </div>
);

export default ChoiceFillingSteps;
