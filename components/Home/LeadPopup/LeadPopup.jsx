"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Show popup after 10 seconds on every page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead form submitted:", formData);
    // Here you would typically send data to your backend
    alert("Thank you for your enquiry! We will contact you soon.");
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] animate-fadeIn"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-slideUp">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Top Border */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-[#20DD8E] to-[#098493]" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-all duration-200 z-10"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Content */}
          <div className="p-5 sm:p-8 md:p-10">
            {/* Header */}
            <div className="mb-5 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="popup-name"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="popup-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900 hover:border-gray-400"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="popup-email"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="popup-email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900 hover:border-gray-400"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="popup-phone"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm sm:text-base">
                    +91
                  </div>
                  <input
                    id="popup-phone"
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 10) {
                        setFormData((prev) => ({ ...prev, phone: value }));
                      }
                    }}
                    maxLength={10}
                    required
                    className="w-full pl-12 sm:pl-14 pr-3 sm:pr-4 py-2.5 sm:py-3.5 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 text-gray-900 hover:border-gray-400"
                  />
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-1.5">
                  We'll never share your details with anyone else
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary via-[#20DD8E] to-[#098493] hover:shadow-xl text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] mt-4 sm:mt-6"
              >
                Submit Enquiry
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* Trust Badge */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-4 sm:h-4"
              >
                <path
                  d="M8 1L10.5 6L16 6.75L12 10.5L13 16L8 13.25L3 16L4 10.5L0 6.75L5.5 6L8 1Z"
                  fill="#20B486"
                />
              </svg>
              <span>Trusted by 10,000+ students</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default LeadPopup;
