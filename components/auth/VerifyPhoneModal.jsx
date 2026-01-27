"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

const VerifyPhoneModal = ({ isOpen, onClose, phoneNumber }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  if (!isOpen) return null;

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-[20px] shadow-lg w-[90%] max-w-lg sm:p-10 p-5 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute size-10 top-4 right-4 text-gray-500 bg-[#ECECEC] rounded-full p-2 hover:bg-gray-300 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-1 text-left">Verify Phone</h2>

        {/* Description */}
        <p className="text-[#666666] sm:mb-4 mb-2 text-lg sm:mt-4 mt-2 text-left">
          Code has been sent to {phoneNumber || '+xxxx-xxxx-2546'}
        </p>

        {/* Label */}
        <label className="block text-sm font-medium text-[#666666] mb-2 text-left">
          Mobile No.
        </label>

        {/* OTP Input Boxes */}
        <div className="flex gap-3 sm:mb-4 mb-2">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-[#CBD5E0] bg-[#F7FAFC] rounded-lg text-center text-sm font-medium focus:outline-none focus:border-[#20B486]"
            />
          ))}
        </div>

        {/* Resend Code */}
        <p className="text-sm text-gray-600 sm:mb-4 mb-2 text-left">
          Didn't get OTP Code?{" "}
          <span className="text-[#20B486] font-medium cursor-pointer hover:underline">
            Resend Code
          </span>
        </p>

        {/* Verify Button */}
        <button 
          onClick={() => {
            // Handle verification logic here
            console.log('OTP:', otp.join(''));
          }}
          className="w-full bg-[#20B486] text-white font-medium py-2.5 rounded-lg transition hover:bg-[#1da178]"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyPhoneModal;