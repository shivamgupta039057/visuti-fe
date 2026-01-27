"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import VerifyPhoneModal from "./VerifyPhoneModal";
import RegisterModal from "./RegisterModal";

export default function LoginWithOtpModal({ open, onClose, onBackToSignIn }) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "https://flagcdn.com/in.svg",
    code: "+91",
    name: "India"
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countries = [
    { flag: "https://flagcdn.com/in.svg", code: "+91", name: "India" },
    { flag: "https://flagcdn.com/us.svg", code: "+1", name: "USA" },
    { flag: "https://flagcdn.com/gb.svg", code: "+44", name: "UK" },
    { flag: "https://flagcdn.com/au.svg", code: "+61", name: "Australia" },
    { flag: "https://flagcdn.com/de.svg", code: "+49", name: "Germany" },
    { flag: "https://flagcdn.com/fr.svg", code: "+33", name: "France" }
  ];

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCountryDropdown) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showCountryDropdown]);

  // don't render if closed
  if (!open) return null;

  // backdrop click handler — only close if clicked backdrop itself
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      // Close dropdown if open, otherwise close modal
      if (showCountryDropdown) {
        setShowCountryDropdown(false);
      } else {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Login Modal - hide when register modal is open */}
      {!showRegisterModal && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50"
          onClick={handleBackdropClick} // only fires close when e.target === e.currentTarget
          aria-modal="true"
          role="dialog"
        >
      {/* Modal Box: stopPropagation not required because we check target above,
          but you can keep it for extra safety */}
      <div
        className="bg-white rounded-[20px] [box-shadow:0px_4px_30px_0px_#495F8E26] w-[90%] max-w-lg sm:p-10 p-5 relative overflow-visible"
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

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl text-left font-bold mb-1 text-black">Login with OTP</h2>

        {/* Create Account */}
        <p className="text-[#666666] mb-4 text-sm sm:text-lg sm:mt-4 mt-2 text-left">
          Don't have an account?{" "}
          <span 
            onClick={() => {
              console.log("Create now clicked"); // Debug log
              setShowRegisterModal(true); // Open register modal first
              // onClose(); // Don't close login modal immediately
            }}
            className="text-primary font-medium cursor-pointer underline hover:text-[#029e65] transition-colors"
          >
            Create now
          </span>
        </p>

        {/* Back to Sign In */}
        <p className="text-[#666666] mb-6 text-sm text-left">
          Want to use email/password?{" "}
          <span 
            onClick={() => {
              if (onBackToSignIn) {
                onBackToSignIn();
              }
            }}
            className="text-primary font-medium cursor-pointer underline hover:text-[#029e65] transition-colors"
          >
            Sign in with Email
          </span>
        </p>

        {/* Phone Input */}
        <label className="block text-sm font-medium text-[#666666] mb-1 text-left">
          Mobile No.
        </label>
        
        <div className="flex items-center border border-[#CBD5E0] [box-shadow:_0px_2px_0px_0px_#E7EBEE33_inset] rounded-lg overflow-visible mb-5 bg-[#F7FAFC] relative">
          <div 
            onClick={(e) => {
              e.stopPropagation();
              setShowCountryDropdown(prev => !prev);
            }}
            className="flex items-center gap-3 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-3 text-sm min-w-[110px] cursor-pointer transition-all duration-200 relative"
          >
            <img 
              src={selectedCountry.flag} 
              alt={selectedCountry.name} 
              className="w-6 h-6 rounded-sm object-cover shadow-sm" 
            />
            <span className="font-medium">{selectedCountry.code}</span>
            <svg 
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </div>
          
          {/* Country Dropdown */}
          {showCountryDropdown && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg mt-1 z-[9999] w-48 max-h-60 overflow-y-auto"
            >
              <ul className="py-1">
                {countries.map((country, index) => (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCountry(country);
                      setShowCountryDropdown(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors text-sm"
                  >
                    <img 
                      src={country.flag} 
                      alt={country.name} 
                      className="w-5 h-5 rounded-sm object-cover" 
                    />
                    <span className="text-gray-900 font-medium">{country.name}</span>
                    <span className="text-gray-500 ml-auto">{country.code}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <input
            type="tel"
            placeholder="1234567890"
            maxLength="10"
            pattern="[0-9]{10}"
            value={phoneNumber}
            onChange={(e) => {
              // Only allow numbers and limit to 10 digits
              const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
              setPhoneNumber(value);
            }}
            className="flex-1 px-3 py-2 outline-none text-gray-700 bg-[#F7FAFC]"
          />
        </div>

        {/* Send OTP Button */}
        <button 
          onClick={() => {
            if (phoneNumber && phoneNumber.length === 10) {
              setShowVerifyModal(true);
            } else {
              alert('Please enter a valid 10-digit phone number');
            }
          }} 
          className="w-full bg-primary hover:bg-[#029e65] text-white font-medium py-2.5 rounded-lg mb-4 transition-all"
        >
          Send OTP

        </button>

        {/* OR Line */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-black text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3 flex-col sm:flex-row">
          {/* Facebook */}
          <button className="flex items-center gap-2 justify-center border border-[#CCCCCC] bg-white rounded-lg py-2.5 w-1/2 text-black text-base font-medium hover:bg-gray-50 w-full sm:w-1/2">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_17517)">
          <path d="M21 0H3C1.3455 0 0 1.3455 0 3V21C0 22.6545 1.3455 24 3 24H21C22.6545 24 24 22.6545 24 21V3C24 1.3455 22.6545 0 21 0Z" fill="#1976D2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 12H16.5V9C16.5 8.172 17.172 8.25 18 8.25H19.5V4.5H16.5C15.3065 4.5 14.1619 4.97411 13.318 5.81802C12.4741 6.66193 12 7.80653 12 9V12H9V15.75H12V24H16.5V15.75H18.75L20.25 12Z" fill="#FAFAFA"/>
          </g>
          <defs>
          <clipPath id="clip0_1_17517">
          <rect width="24" height="24" fill="white"/>
          </clipPath>dro
          </defs>
          </svg>

            Continue with Facebook
          </button>

          {/* Google */}
          <button className="flex items-center gap-2 justify-center border border-[#CCCCCC] bg-white rounded-lg py-2.5 w-1/2 text-black text-base font-medium hover:bg-gray-50 w-full sm:w-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_17523)">
              <path d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13362 1.34175 6.48132H1.34241L4.06078 6.9797L5.25159 9.68176C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z" fill="#FBBB00"/>
              <path d="M23.7903 9.75824C23.9282 10.4841 24 11.2338 24 12C24 12.8591 23.9097 13.6971 23.7376 14.5055C23.1535 17.2563 21.6271 19.6582 19.5126 21.358L19.5119 21.3574L16.088 21.1827L15.6034 18.1576C17.0065 17.3347 18.103 16.047 18.6805 14.5055H12.2638V9.75824H23.7903Z" fill="#518EF8"/>
              <path d="M19.5119 21.3574L19.5125 21.358C17.4561 23.011 14.8437 24 12 24C7.43011 24 3.45694 21.4457 1.43011 17.6868L5.31891 14.5035C6.3323 17.2081 8.94132 19.1334 12 19.1334C13.3147 19.1334 14.5464 18.778 15.6033 18.1576L19.5119 21.3574Z" fill="#28B446"/>
              <path d="M19.6595 2.76262L15.7721 5.94525C14.6782 5.26153 13.3852 4.86656 12 4.86656C8.87206 4.86656 6.21425 6.88017 5.25163 9.68175L1.34239 6.48131H1.34174C3.33889 2.63077 7.36217 0 12 0C14.9116 0 17.5813 1.03716 19.6595 2.76262Z" fill="#F14336"/>
              </g>
              <defs>
              <clipPath id="clip0_1_17523">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>

            Continue with Google
          </button>
        </div>
      </div>
    </div>
      )}
      
      {/* Register Modal */}
      <RegisterModal 
        isOpen={showRegisterModal} 
        onClose={() => {
          setShowRegisterModal(false);
          // Reopen login modal when register modal closes
        }}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          // Login modal will automatically show since we didn't close it
        }}
      />

      {/* Verify Phone Modal */}
      <VerifyPhoneModal 
        isOpen={showVerifyModal} 
        onClose={() => setShowVerifyModal(false)}
        phoneNumber={`${selectedCountry.code} ${phoneNumber}`}
      />
    </>
  );
}
