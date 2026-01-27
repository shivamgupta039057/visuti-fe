"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import OtpVerification from "./OtpVerification";

// modes: "login" | "otp" | "register"
export default function LoginWithOtpModal({ open, onClose }) {
  const [mode, setMode] = useState("login");

  // Proper: always call hooks in component order, regardless of early returns!
  // Modal never unmounts (preserves the hooks order) and is hidden instead
  // Do not short-circuit return before hooks

  // close on ESC and reset mode when modal closes
  useEffect(() => {
    // When modal gets closed, reset to "login"
    if (!open) {
      setMode("login");
    }

    if (!open) return; // don't listen to key if not shown

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // backdrop click handler — only close if clicked backdrop itself
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Instead of conditional return, render null if not open
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Box */}
      <div
        className="bg-white rounded-[20px] [box-shadow:0px_4px_30px_0px_#495F8E26] w-[90%] max-w-lg sm:p-10 p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 bg-[#ECECEC] rounded-full p-2 hover:bg-gray-300 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGIN WITH OTP */}
        {mode === "login" && (
          <>
            <h2 className="text-2xl sm:text-4xl text-left font-bold mb-1 text-black">
              Login with OTP
            </h2>

            <p className="text-[#666666] mb-6 text-sm sm:text-lg sm:mt-4 mt-2 text-left">
              Don’t have an account?{" "}
              <span
                className="text-primary font-medium cursor-pointer underline"
                onClick={() => setMode("register")}
              >
                Create now
              </span>
            </p>

            <label className="block text-sm font-medium text-[#666666] mb-1 text-left">
              Mobile No.
            </label>
            <div className="flex items-center border border-[#CBD5E0] [box-shadow:_0px_2px_0px_0px_#E7EBEE33_inset] rounded-lg overflow-hidden mb-5 bg-[#F7FAFC]">
              <select className="border-r bg-gray-50 text-gray-700 px-2 py-2 text-sm outline-none focus:outline-none">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="1234567890"
                className="flex-1 px-3 py-2 outline-none text-gray-700 bg-[#F7FAFC]"
              />
            </div>

            <button
              onClick={() => setMode("otp")}
              className="w-full bg-primary hover:bg-[#029e65] text-white font-medium py-2.5 rounded-lg mb-4 transition-all"
            >
              Send OTP
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-black text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex items-center gap-3 flex-col sm:flex-row">
              <button className="flex items-center gap-2 justify-center border border-[#CCCCCC] bg-white rounded-lg py-2.5 text-black text-base font-medium hover:bg-gray-50 w-full sm:w-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17517)">
                    <path
                      d="M21 0H3C1.3455 0 0 1.3455 0 3V21C0 22.6545 1.3455 24 3 24H21C22.6545 24 24 22.6545 24 21V3C24 1.3455 22.6545 0 21 0Z"
                      fill="#1976D2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.25 12H16.5V9C16.5 8.172 17.172 8.25 18 8.25H19.5V4.5H16.5C15.3065 4.5 14.1619 4.97411 13.318 5.81802C12.4741 6.66193 12 7.80653 12 9V12H9V15.75H12V24H16.5V15.75H18.75L20.25 12Z"
                      fill="#FAFAFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17517">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Facebook
              </button>

              <button className="flex items-center gap-2 justify-center border border-[#CCCCCC] bg-white rounded-lg py-2.5 text-black text-base font-medium hover:bg-gray-50 w-full sm:w-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17523)">
                    <path
                      d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13362 1.34175 6.48132H1.34241L4.06078 6.9797L5.25159 9.68176C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z"
                      fill="#FBBB00"
                    />
                    <path
                      d="M23.7903 9.75824C23.9282 10.4841 24 11.2338 24 12C24 12.8591 23.9097 13.6971 23.7376 14.5055C23.1535 17.2563 21.6271 19.6582 19.5126 21.358L19.5119 21.3574L16.088 21.1827L15.6034 18.1576C17.0065 17.3347 18.103 16.047 18.6805 14.5055H12.2638V9.75824H23.7903Z"
                      fill="#518EF8"
                    />
                    <path
                      d="M19.5119 21.3574L19.5125 21.358C17.4561 23.011 14.8437 24 12 24C7.43011 24 3.45694 21.4457 1.43011 17.6868L5.31891 14.5035C6.3323 17.2081 8.94132 19.1334 12 19.1334C13.3147 19.1334 14.5464 18.778 15.6033 18.1576L19.5119 21.3574Z"
                      fill="#28B446"
                    />
                    <path
                      d="M19.6595 2.76262L15.7721 5.94525C14.6782 5.26153 13.3852 4.86656 12 4.86656C8.87206 4.86656 6.21425 6.88017 5.25163 9.68175L1.34239 6.48131H1.34174C3.33889 2.63077 7.36217 0 12 0C14.9116 0 17.5813 1.03716 19.6595 2.76262Z"
                      fill="#F14336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17523">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
            </div>
          </>
        )}

        {/* OTP VERIFICATION STEP */}
        {mode === "otp" && (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Verify Phone
            </h2>
            <OtpVerification />
            <button
              type="button"
              onClick={() => setMode("login")}
              className="text-sm text-primary font-medium underline mt-2"
            >
              Back to login
            </button>
          </div>
        )}

        {/* SIMPLE REGISTER STEP */}
        {mode === "register" && (
          <div className="register-container bg-white rounded-lg p-8 shadow-lg max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Register Now</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="text-2xl text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>
            <div className="mb-4 text-gray-600 text-base">
              Already have an account?{' '}
              <span
                className="text-emerald-600 font-semibold cursor-pointer hover:underline"
                onClick={() => setMode('login')}
              >
                Sign in
              </span>
            </div>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="1234567890"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course
                  </label>
                  <select className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none">
                    <option value="">Select Course</option>
                    {/* Dynamic course options here */}
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <select className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none">
                    <option value="">Select State</option>
                    {/* Dynamic state options here */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div></div>
              </div>
              <div className="flex items-start space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-500 select-none">
                  By submitting this form, you accept and agree to our{' '}
                  <a href="#" className="text-emerald-600 font-semibold hover:underline">
                    Terms of Use
                  </a>.
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-emerald-500/30 shadow hover:bg-emerald-700 focus:outline-none transition"
              >
                Create Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
