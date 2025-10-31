"use client";

import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Our Services", href: "#", hasDropdown: true },
  { label: "College Predictor", href: "#", hasDropdown: true },
  { label: "MBBS India", href: "#", hasDropdown: true },
  { label: "MBBS Abroad", href: "#", hasDropdown: true },
  { label: "NRI Quota", href: "#" },
  { label: "Counseling Plans", href: "#" },
  { label: "Others", href: "#", hasDropdown: true },
];

const SLIDES = [
  "India’s No.1 Medical Counselling Platform",
  "Trusted by 10,000+ Students Worldwide",
  "Personalised Guidance For MBBS Admissions",
];

const NewHeader = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top ribbon */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#02B2D7] via-[#17C964] to-[#0AA8D8]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-3 px-4 py-3 text-white md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm">
            <img src="/Globe.png" alt="globe" className="h-6 w-6" />
            <span className="flex flex-wrap items-center gap-2">
              Get MBBS Abroad Free Counselling
              <span className="relative inline-flex items-center gap-1 font-semibold text-[#FFE8D6]">
                <a href="#" className="underline decoration-2 decoration-[#FF0000]">
                  Click Here
                </a>
                <img src="/arrow.png" alt="arrow" className="h-4 w-4 -mb-2" />
              </span>
            </span>
          </div>

          <div className="mx-auto w-full max-w-xs rounded-md bg-white px-4 py-2 text-center text-xs font-semibold text-gray-900 shadow-sm md:max-w-sm">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              loop
            >
              {SLIDES.map((text) => (
                <SwiperSlide key={text}>{text}</SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center justify-end gap-4 text-sm font-semibold">
            <button
              type="button"
              className="flex items-center gap-2 transition hover:text-yellow-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.55-2.27A1 1 0 0121 8.62V19a2 2 0 01-2 2H5a2 2 0 01-2-2V8.62a1 1 0 011.45-.89L9 10m6 0V5a3 3 0 00-6 0v5m6 0H9"
                />
              </svg>
              Request a call back
            </button>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white px-4 py-1 transition hover:bg-white hover:text-[#2CA772]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-5 w-5"
              >
                <path d="M16 8a8 8 0 1 0-9.25 7.88v-5.57H4.69V8h2.06V6.23c0-2.05 1.22-3.18 3.09-3.18.9 0 1.84.16 1.84.16v2.02h-1.04c-1.02 0-1.34.63-1.34 1.27V8h2.28l-.36 2.31H9.3v5.57A8 8 0 0 0 16 8z" />
              </svg>
              Join Our Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Middle bar: logo, search, quick actions */}
      <div className="border-y border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:gap-8">
          <div className="flex items-center justify-between gap-4">
            <img
              src="/Logo.png"
              alt="Visuti Career"
              className="h-10 w-auto md:h-16"
            />

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden flex-1 md:flex md:items-center">
            <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-primary/20 bg-white px-4 py-3 shadow-sm">
              <img
                src="/University.png"
                alt="search domain"
                className="h-5 w-5"
              />
              <input
                type="text"
                placeholder="Search For Colleges, Universities, Courses & etc..."
                className="flex-1 text-sm text-gray-600 outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary/90"
              >
                <img src="/search.png" alt="search" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:ml-auto">
            <div className="hidden items-center gap-2 rounded-xl border border-[#FF0000]/30 bg-[#FFF5F5] px-4 py-2 text-sm font-semibold text-[#FF0000] md:flex">
              <span className="text-lg leading-none">You</span>
              <span>Tube</span>
            </div>
            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-primary/40 hover:text-primary md:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.966 8.966 0 0118 9.75v-.7c0-1.38-.56-2.706-1.528-3.642a4.964 4.964 0 00-7.072 0A5.142 5.142 0 007.875 9.05v.7c0 2.204-.878 4.317-2.311 5.942a23.91 23.91 0 005.383 1.39m3.91 0a24.347 24.347 0 01-4.666 0m3.91 0a3 3 0 11-3.155-4.987"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-primary/40 hover:text-primary md:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-primary/40 hover:text-primary md:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 px-4 py-3 text-sm text-primary md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap items-center justify-center gap-3 font-medium text-[#0F172A]">
            {NAV_ITEMS.map((item, index) => (
              <Fragment key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-1 capitalize transition hover:text-primary/80"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>
                {index !== NAV_ITEMS.length - 1 && (
                  <span
                    className="hidden h-5 w-px bg-gray-200 last:hidden md:block"
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-3 text-accent">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-[#E7F9F0] text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25c0 7.108 4.617 12 9.75 12s9.75-4.892 9.75-12M8.25 8.25a3.75 3.75 0 107.5 0"
                />
              </svg>
            </span>
            <div className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Call us now
              </span>
              <a
                href="tel:+919145879646"
                className="text-lg font-semibold text-accent"
              >
                +91 9145879646
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
