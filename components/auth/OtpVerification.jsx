"use client";
import { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handlePaste = (event) => {
    const paste = event.clipboardData.getData("text").split("").filter((char) => /^\d$/.test(char));
    const newOtp = [...otp];
    for (let i = 0; i < Math.min(paste.length, 4); i++) {
      newOtp[i] = paste[i];
    }
    setOtp(newOtp);
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 w-96 mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900">Verify Phone</h2>
      <p className="text-lg text-gray-600 mt-4">Code has been sent to +xxxx-xxxx-2546</p>
      <div className="flex justify-center mt-6 space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center border rounded-lg shadow-md focus:outline-none focus:border-green-400"
          />
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">Didn’t get OTP Code? <span className="text-green-500 cursor-pointer">Resend Code</span></p>
      <button className="bg-green-500 text-white py-3 px-8 mt-6 rounded-lg">Verify</button>
    </section>
  );
};

export default OtpVerification;
