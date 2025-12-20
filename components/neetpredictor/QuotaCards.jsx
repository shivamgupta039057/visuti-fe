'use client';

import Link from 'next/link';
import React from 'react';

export default function QuotaCards() {
  const cards = [
    {
      type: "NEET UG 2026",
      title: "State Quota College Predictor",
      description:
        "Explore state-wise NEET counseling rules, reservations, seat distribution, and State Quota procedures.",
      features: [
        "100% Verified AIQ & State Quota",
        "AI-Powered College Suggestions",
        "Complete Academic & Bond Info",
      ],
      gradient: "bg-[linear-gradient(90deg,#20DD8E_0%,#098493_100%)]",


      bgColor: "bg-[#F2FBED]",
      image: "/quates1.png",
    },
    {
      type: "NEET UG 2026",
      title: "All India Quota College Predictor",
      description:
        "Explore state-wise NEET counseling rules, reservations, seat distribution, and State Quota procedures.",
      features: [
        "100% Verified AIQ & State Quota",
        "AI-Powered College Suggestions",
        "Complete Academic & Bond Info",
      ],
      gradient: "bg-[linear-gradient(90deg,_#54A7FF_0%,_#326499_100%)]",
      bgColor: "bg-[#E7F3FF]",
      image: "/quates3.png",
    },
    {
      type: "NEET UG 2026",
      title: "NRI Quota College Predictor",
      description:
        "Explore state-wise NEET counseling rules, reservations, seat distribution, and State Quota procedures.",
      features: [
        "100% Verified AIQ & State Quota",
        "AI-Powered College Suggestions",
        "Complete Academic & Bond Info",
      ],
      gradient: "bg-[linear-gradient(90deg,_#B151FF_0%,_#6A3099_100%))]",
      bgColor: "bg-[#F7EBFF]",
      image: "/quates2.png",
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} rounded-[10px] relative overflow-hidden p-6`}
        >
          <img
            src={card.image}
            alt=""
            className="absolute top-0 right-0 md:w-36 w-28 md:h-52 h-40 opacity-90 pointer-events-none"
          />

          <div className="relative z-10">
            <span className="text-sm font-semibold bg-white p-2 rounded-md">
              {card.type}
            </span>

            <h2 className="lg:text-[26px] text-xl text-black font-semibold mt-4">{card.title}</h2>
            <p className="md:text-lg text-sm mt-2  text-black">{card.description}</p>

            <ul className="mt-4 space-y-2">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 md:text-lg text-sm">
                  <span className="size-5">
                    <svg  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="30" height="30" rx="15" fill="#EEEEEE"/>
                      <circle cx="15" cy="15" r="7" fill="black"/>
                      </svg>

                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
                      href="/neetPredictor"
                      >
            <button
              className={`mt-6 px-6 py-3 rounded-lg font-medium text-white shadow-md bg-gradient-to-r ${card.gradient}`}
            >
              Check Eligibility & Seatsdddd
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
