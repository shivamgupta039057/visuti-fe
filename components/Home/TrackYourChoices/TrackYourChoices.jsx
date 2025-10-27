"use client";
import React from "react";
import { FaBell, FaShieldAlt, FaUserFriends, FaChalkboardTeacher } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiDownload2Line } from "react-icons/ri";
import Image from "next/image";

const features = [
  {
    icon: <MdDashboardCustomize className="text-[#4F46E5] text-2xl" />,
    title: "All-in-One Counselling Dashboard",
    points: [
      "Track AIQ + all state quotas in one unified platform",
      "Real-time updates for choice filling and allotment rounds",
      "Seamless navigation across 28+ states including UP, MP, MH, RJ",
    ],
  },
  {
    icon: <FaBell className="text-[#EC4899] text-2xl" />,
    title: "Live Updates & Notifications",
    points: [
      "Instant alerts for schedule changes and seat allotments",
      "Centralized updates from all portals in one click",
      "WhatsApp and email notifications for every round",
    ],
  },
  {
    icon: <FaUserFriends className="text-[#3B82F6] text-2xl" />,
    title: "User-Friendly Tracking Interface",
    points: [
      "Monitor applications and document verification effortlessly",
      "Step-by-step video tutorials for guidance",
      "Fully responsive across mobile and desktop",
    ],
  },
  {
    icon: <FaShieldAlt className="text-[#F97316] text-2xl" />,
    title: "Trust & Transparency",
    points: [
      "Verified data from official portals (MCC, KEA, UPDGME)",
      "Complete transparency with no hidden charges",
      "Proven success with thousands of student testimonials",
    ],
  },
  {
    icon: <FaChalkboardTeacher className="text-[#EC4899] text-2xl" />,
    title: "Expert Counselling Support",
    points: [
      "Personalized help from NEET counselling experts",
      "State-specific doubt clearing sessions",
      "24x7 live chat and chatbot assistance",
    ],
  },
];

export default function TrackYourChoices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-12">
            <div className="col-span-4"></div>
        </div>
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3 mb-3">
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            {feature.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span> {point}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Download App Box */}
      <div className="bg-[#F0FDF4] border border-green-200 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Download The Visuti Career App
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            New features. New appearance. No risk and credit card required.
          </p>
        </div>
        <div className="flex gap-3">
          <Image src="/googleplay.png" alt="Google Play" width={120} height={40} />
          <Image src="/appstore.png" alt="App Store" width={120} height={40} />
        </div>
      </div>
    </section>
  );
}
