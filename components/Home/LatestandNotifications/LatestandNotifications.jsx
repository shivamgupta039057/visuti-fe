"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./contactFormSchema";

const LatestandNotifications = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleSendOtp = () => {
    if (phoneNumber && phoneNumber.length >= 10) {
      // Here you would typically call an API to send OTP
      console.log("Sending OTP to:", selectedCountry + phoneNumber);
      setOtpSent(true);
      // Simulate OTP send
      alert("OTP sent to " + selectedCountry + phoneNumber);
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      otp: otp.join(""),
      countryCode: selectedCountry,
    };
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="relative py-8 md:py-0">
      <div className="absolute inset-0 z-10 max-md:hidden">
        <img
          src="/banner.png"
          alt="hero-banner"
          className="h-full w-full object-cover overflow-hidden"
        />
      </div>
      <div className="max-w-7xl mx-auto lg:px-6 px-4 z-15 relative">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-0">
          {/* LEFT NEWS */}
          <div className="h-full flex flex-col bg-primary md:p-5 p-4 md:mr-12 rounded-lg md:rounded-none">
            <div className="mb-4 md:mb-6 md:pt-10 pt-3">
              <h2 className="md:text-3xl text-xl font-semibold text-center text-white">
                Latest News &amp; Notifications
              </h2>
            </div>

            {/* Auto-scroll container */}
            <div className="flex-1 relative w-full overflow-hidden bg-white rounded-[10px] p-2 min-h-[300px] md:min-h-[400px]">
              <div
                className="space-y-3 md:space-y-4 animate-scrollNews"
                style={{
                  animation: "scrollNews 20s linear infinite",
                }}
              >
                {/* Repeatable News Items */}
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-start md:items-center gap-3 md:gap-4 md:p-4 p-2 bg-[#FBFBFB] border border-[#F1F1F1] rounded-xl w-full"
                  >
                    <div className="shrink-0">
                      <img
                        src="/acedmy.png"
                        alt="Google Ads Training"
                        className="md:w-[130px] w-20 md:h-20 h-16 shrink-0 rounded-md bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="text-xs md:text-sm font-medium text-black flex gap-2 line-clamp-2">
                        <span className="text-[#FF0000] underline sprinkle-text blink-text shrink-0">Live</span>
                        <span className="line-clamp-2">Google Ads Training 2021: Profit with Pay</span>
                      </div>
                      <span className="text-[10px] md:text-xs text-[#666666] line-clamp-2 mt-1">
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                      <div className="font-medium text-[10px] md:text-xs text-[#168B67] mt-2 md:mt-3">
                        15 April, 2025
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/coming-soon"
              className="px-4 py-2 md:py-2.5 text-black font-semibold mx-auto md:mt-20 mt-6 md:mb-10 mb-3 capitalize bg-white rounded-[10px] text-center block hover:bg-gray-50 transition-colors text-sm md:text-base"
            >
              view all notifications
            </Link>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            <div className="md:p-6 h-full flex flex-col justify-center items-center">
              <div className="w-full bg-white rounded-lg md:p-8 p-5 shadow-sm">
                <h2 className="font-bold md:text-4xl text-2xl text-black md:mb-8 mb-5">
                  Have A Question? Ask Us!
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-5 space-y-4">
                  {/* Name and Email - Side by side on desktop */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-black md:text-sm text-xs font-medium md:mb-2 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Saloni Mangal"
                        {...register("name")}
                        className="w-full border border-gray-300 rounded-lg md:px-4 px-3 md:py-2.5 py-2 md:text-sm text-xs placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-black md:text-sm text-xs font-medium md:mb-2 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        {...register("email")}
                        className="w-full border border-gray-300 rounded-lg md:px-4 px-3 md:py-2.5 py-2 md:text-sm text-xs placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Courses Dropdown */}
                  <div>
                    <label className="block text-black md:text-sm text-xs font-medium md:mb-2 mb-1.5">
                      Courses
                    </label>
                    <div className="relative">
                      <select
                        {...register("course")}
                        className="w-full border border-gray-300 rounded-lg md:pl-10 md:pr-10 pl-8 pr-8 md:py-2.5 py-2 md:text-sm text-xs text-gray-500 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white cursor-pointer"
                      >
                        <option value="">Select course</option>
                        <option value="neet-ug">NEET UG</option>
                        <option value="neet-pg">NEET PG</option>
                        <option value="iit-jee">IIT/JEE</option>
                        <option value="mbbs-india">MBBS India</option>
                        <option value="mbbs-abroad">MBBS Abroad</option>
                      </select>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="md:w-4 md:h-4 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <div className="absolute md:right-3 right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="md:w-4 md:h-4 w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.course.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number with Country Code */}
                  <div>
                    <label className="block text-black md:text-sm text-xs font-medium md:mb-2 mb-1.5">
                      Phone Number
                    </label>
                    <div className="flex gap-2 md:gap-3">
                      {/* Country Code Selector */}
                      <div className="relative shrink-0">
                        <div className="absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          {selectedCountry === "+1" && (
                            <svg width="20" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm md:w-6 md:h-4">
                              <path d="M24 0H0V16.0002H24V0Z" fill="#F0F0F0" />
                              <path d="M24 1.99988H0V3.99971H24V1.99988ZM24 6.00005H0V7.99988H24V6.00005ZM24 9.99971H0V11.9995H24V9.99971ZM24 13.9999H0V15.9997H24V13.9999Z" fill="#D80027" />
                              <path d="M24 0H12V8.61548H24V0Z" fill="#2E52B2" />
                              <path d="M19.3209 3.52932L19.5142 4.12389H20.1393L19.6335 4.49115L19.8267 5.08567L19.3209 4.7184L18.8154 5.08567L19.0086 4.49115L18.5028 4.12389H19.128L19.3209 3.52932ZM19.128 6.26945L19.3209 5.67493L19.5142 6.26945H20.1393L19.6335 6.63676L19.8267 7.23128L19.3209 6.86396L18.8154 7.23128L19.0086 6.63676L18.5028 6.26945H19.128ZM21.7699 6.26945L21.9629 5.67493L22.1561 6.26945H22.7812L22.2754 6.63676L22.4687 7.23128L21.9629 6.86396L21.4573 7.23128L21.6505 6.63676L21.1448 6.26945H21.7699ZM21.9629 3.52932L22.1561 4.12389H22.7812L22.2754 4.49115L22.4687 5.08567L21.9629 4.7184L21.4573 5.08567L21.6505 4.49115L21.1448 4.12389H21.7699L21.9629 3.52932ZM19.3209 1.38367L19.5142 1.97828H20.1393L19.6335 2.34559L19.8267 2.9401L19.3209 2.57279L18.8154 2.9401L19.0086 2.34559L18.5028 1.97828H19.128L19.3209 1.38367ZM21.9629 1.38367L22.1561 1.97828H22.7812L22.2754 2.34559L22.4687 2.9401L21.9629 2.57279L21.4573 2.9401L21.6505 2.34559L21.1448 1.97828H21.7699L21.9629 1.38367ZM16.679 3.52932L16.8722 4.12389H17.4973L16.9915 4.49115L17.1847 5.08567L16.679 4.7184L16.1734 5.08567L16.3666 4.49115L15.8608 4.12389H16.4859L16.679 3.52932ZM16.4859 6.26945L16.679 5.67493L16.8722 6.26945H17.4973L16.9915 6.63676L17.1847 7.23128L16.679 6.86396L16.1734 7.23128L16.3666 6.63676L15.8608 6.26945H16.4859ZM13.844 6.26945L14.037 5.67493L14.2302 6.26945H14.8553L14.3496 6.63676L14.5428 7.23128L14.037 6.86396L13.5314 7.23128L13.7247 6.63676L13.2188 6.26945H13.844ZM14.037 3.52932L14.2302 4.12389H14.8553L14.3496 4.49115L14.5428 5.08567L14.037 4.7184L13.5314 5.08567L13.7247 4.49115L13.2188 4.12389H13.844L14.037 3.52932ZM16.679 1.38367L16.8722 1.97828H17.4973L16.9915 2.34559L17.1847 2.9401L16.679 2.57279L16.1734 2.9401L16.3666 2.34559L15.8608 1.97828H16.4859L16.679 1.38367ZM14.037 1.38367L14.2302 1.97828H14.8553L14.3496 2.34559L14.5428 2.9401L14.037 2.57279L13.5314 2.9401L13.7247 2.34559L13.2188 1.97828H13.844L14.037 1.38367Z" fill="#F0F0F0" />
                            </svg>
                          )}
                          {selectedCountry === "+91" && (
                            <svg width="20" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm md:w-6 md:h-4">
                              <path d="M24 0H0V16H24V0Z" fill="#F0F0F0" />
                              <path d="M24 0H0V5.33333H24V0Z" fill="#FF9933" />
                              <path d="M24 10.6667H0V16H24V10.6667Z" fill="#138808" />
                              <circle cx="12" cy="8" r="2" fill="#000080" stroke="#000080" strokeWidth="0.5" />
                              <path d="M12 6.5L12.3 7.2H13L12.5 7.6L12.7 8.3L12 7.9L11.3 8.3L11.5 7.6L11 7.2H11.7L12 6.5Z" fill="#000080" />
                            </svg>
                          )}
                          {selectedCountry === "+44" && (
                            <svg width="20" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm md:w-6 md:h-4">
                              <path d="M24 0H0V16H24V0Z" fill="#012169" />
                              <path d="M0 0L24 16M24 0L0 16" stroke="#FFF" strokeWidth="3" />
                              <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="2" />
                              <path d="M10 0H14V16H10V0ZM0 6H24V10H0V6Z" fill="#FFF" />
                              <path d="M11 0H13V16H11V0ZM0 7H24V9H0V7Z" fill="#C8102E" />
                            </svg>
                          )}
                          {selectedCountry === "+86" && (
                            <svg width="20" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm md:w-6 md:h-4">
                              <path d="M24 0H0V16H24V0Z" fill="#DE2910" />
                              <path d="M4 2L4.5 3.5H6L4.8 4.3L5.3 5.8L4 5L2.7 5.8L3.2 4.3L2 3.5H3.5L4 2Z" fill="#FFDE00" />
                              <path d="M8 1L8.2 1.5H8.7L8.3 1.8L8.5 2.3L8 2L7.5 2.3L7.7 1.8L7.3 1.5H7.8L8 1Z" fill="#FFDE00" />
                              <path d="M9.5 3L9.7 3.5H10.2L9.8 3.8L10 4.3L9.5 4L9 4.3L9.2 3.8L8.8 3.5H9.3L9.5 3Z" fill="#FFDE00" />
                              <path d="M9.5 5.5L9.7 6H10.2L9.8 6.3L10 6.8L9.5 6.5L9 6.8L9.2 6.3L8.8 6H9.3L9.5 5.5Z" fill="#FFDE00" />
                              <path d="M8 7.5L8.2 8H8.7L8.3 8.3L8.5 8.8L8 8.5L7.5 8.8L7.7 8.3L7.3 8H7.8L8 7.5Z" fill="#FFDE00" />
                            </svg>
                          )}
                          {selectedCountry === "+81" && (
                            <svg width="20" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm md:w-6 md:h-4">
                              <path d="M24 0H0V16H24V0Z" fill="#FFF" />
                              <circle cx="12" cy="8" r="4.8" fill="#BC002D" />
                            </svg>
                          )}
                        </div>
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="h-full border border-gray-300 rounded-lg md:pl-10 md:pr-8 pl-8 pr-6 md:py-2.5 py-2 md:text-sm text-xs appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white cursor-pointer font-medium text-gray-700 w-[75px] md:w-[95px]"
                        >
                          <option value="+1">+1</option>
                          <option value="+91">+91</option>
                          <option value="+44">+44</option>
                          <option value="+86">+86</option>
                          <option value="+81">+81</option>
                        </select>
                        <div className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        placeholder="1234567890"
                        value={phoneNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 10) {
                            setPhoneNumber(value);
                          }
                        }}
                        maxLength={10}
                        className="flex-1 min-w-0 border border-gray-300 rounded-lg md:px-4 px-3 md:py-2.5 py-2 md:text-sm text-xs placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {!otpSent && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          className="bg-primary text-white font-medium md:px-5 px-3 md:py-2.5 py-2 md:text-sm text-xs rounded-lg hover:opacity-90 transition-all whitespace-nowrap shrink-0"
                        >
                          Send OTP
                        </button>
                      )}
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Enter OTP - Only show if OTP is sent */}
                  {otpSent && (
                    <div>
                      <label className="block text-black md:text-sm text-xs font-medium md:mb-2 mb-1.5">
                        Enter OTP
                      </label>
                      <div className="flex gap-1.5 md:gap-2 justify-start">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                            className="md:w-12 md:h-12 w-10 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 md:text-lg text-base font-medium transition-all"
                            placeholder="0"
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-primary text-xs mt-2 hover:underline"
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}

                  {/* Query */}
                  <div>
                    <label className="block text-black md:text-sm text-xs font-medium md:mb-2 mb-1.5">
                      Query
                    </label>
                    <textarea
                      placeholder="Write Your Query Here..."
                      {...register("query")}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg md:px-4 px-3 md:py-3 py-2 md:text-sm text-xs placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    />
                    {errors.query && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.query.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center md:pt-2 pt-1">
                    <button
                      type="submit"
                      className="bg-[linear-gradient(90deg,_#20DD8E_0%,_#098493_100%)] text-white font-semibold md:px-16 px-10 md:py-3 py-2.5 md:text-base text-sm rounded-lg hover:opacity-90 transition-all shadow-sm w-full md:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default LatestandNotifications;
