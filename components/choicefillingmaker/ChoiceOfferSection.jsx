import React from "react";
import { Check } from "lucide-react";
import { FiPlusCircle } from "react-icons/fi";


const leftItems = [
  "Location Preferences",
  "Deadline Alerts",
  "Daily Reminder",
  "Location Preferences",
  "Deadline Alerts",
  "Daily Reminder",
];

const rightItems = [
  { title: "Choice Progress", desc: "From sign-up to first incident in under 5 minutes. Seriously." },
  { title: "Priority Order", desc: "From sign-up to first incident in under 5 minutes. Seriously." },
  { title: "Rank Requirements", desc: "From sign-up to first incident in under 5 minutes. Seriously." },
  { title: "Quota Tracking", desc: "From sign-up to first incident in under 5 minutes. Seriously." },
];

const ChoiceOfferSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight mb-4">
            What we <span className="text-primary">Offer</span> in <br />
            our <span className="text-primary">Choices filling maker</span>
          </h2>

          <div className="bg-primary rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {leftItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#DEEBFF] rounded-xl px-4 py-3 flex items-center gap-3"
              >
                <span className="bg-primary text-white rounded-full p-1">
                  <Check size={14} />
                </span>
                <p className="text-sm font-medium text-gray-800">{item}</p>
              </div>
            ))}

            {/* Bottom cards */}
            <div className="bg-[#DEEBFF] rounded-xl p-4 col-span-1">
              <p className="font-semibold text-sm mb-2">Welcome To The Visuti Career</p>
              <div className="space-y-1 mt-10">
                <span className="block h-1.5 w-20 bg-primary rounded" />
                <span className="block h-1.5 w-24 bg-primary rounded" />
                <span className="block h-1.5 w-16 bg-primary rounded" />
              </div>
            </div>

            <div className="bg-[#DEEBFF] rounded-xl p-4 col-span-1">
              <p className="font-semibold text-sm mb-1">Quick career guide</p>
              <p className="text-xs font-semibold mb-2">100%</p>
              <div className="space-y-1 mt-10">
                <span className="block h-1.5 w-24 bg-primary rounded" />
                <span className="block h-1.5 w-20 bg-primary rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-[#6A7282] md:text-base text-sm sm:text-lg mb-6 max-w-md">
            Our omni-model platform harnesses the power of the latest AI models
            you've learned and been introduced to, including ChatGPT, LLAMA,
            Claude, and Gemini.
          </p>

          <div className="bg-white rounded-2xl border  gap-4 divide-y border-[#DDDDDD] divide-[#DDDDDD]">
            {rightItems.map((item, index) => (
              <div key={index} className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                 <span className="text-gray-600 text-lg mt-1">
                    <FiPlusCircle />
                  </span>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.desc}
                    </p>
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

export default ChoiceOfferSection;
