"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./contactFormSchema";

const LatestandNotifications = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 max-md:hidden ">
        <img
          src="/banner.png"
          alt="hero-banner"
          className="h-full w-full object-cover overflow-hidden"
        />
      </div>
      <div className="max-w-7xl mx-auto lg:px-6 px-4 z-15 relative">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {/* LEFT NEWS */}
          <div className="h-full flex flex-col bg-primary p-5">
            <div className="mb-6 md:pt-10 pt-5">
              <h2 className="md:text-3xl text-2xl font-semibold text-center text-white">
                Latest News &amp; Notifications
              </h2>
            </div>

            {/* Auto-scroll container */}
            <div className="flex-1 relative w-full md:pr-20 overflow-hidden">
              <div
                className="space-y-4 animate-scrollNews"
                style={{
                  animation: "scrollNews 20s linear infinite", // 20s loop, tum speed change kar sakte ho
                }}
              >
                {/* Repeatable News Items */}
                {[1, 2, 3,].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 md:p-4 p-2 bg-white rounded-xl"
                  >
                    <div className="shrink-0">
                      <img
                        src="/acedmy.png"
                        alt="Google Ads Training"
                        className="md:w-[130px] w-24 h-20 shrink-0 rounded-md bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10"
                      />
                    </div>
                    <div className="flex-1 flex-col truncate">
                      <div className="text-sm/6 font-medium text-black flex gap-2 line-clamp-1">
                        <span className="text-[#FF0000] underline sprinkle-text blink-text">Live</span>
                        Google Ads Training 2021: Profit with Pay
                      </div>
                      <span className="truncate text-xs text-[#666666]">
                        Lorem Ipsum is simply dummy text of the printing
                      </span>
                      <span className="font-medium text-xs text-[#168B67] mt-5">
                        15 April, 2025
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full ">
            <div className="md:p-6 h-full flex flex-col justify-center items-center ">
              <div className="w-full bg-white rounded-lg p-6 ">
                <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl/5 text-center text-black md:mb-6 mb-4">
                  Have A Question? Ask Us!
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-black md:text-lg text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      {...register("name")}
                      className="w-full border border-[#A0A0A0] rounded-[10px] px-3 py-2 placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-black md:text-lg text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email")}
                      className="w-full border border-[#A0A0A0] rounded-[10px] px-3 py-2 placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-black md:text-lg text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...register("phone")}
                      className="w-full border border-[#A0A0A0] rounded-[10px] px-3 py-2 placeholder:text-[#A0A0A0] focus:outline-none focus:border-primary"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  {/* Query */}
                  <div>
                    <label className="block text-black md:text-lg text-sm font-medium mb-1">
                      Query
                    </label>
                    <textarea
                      placeholder="Write Your Query Here..."
                      {...register("query")}
                      className="w-full border border-[#A0A0A0] rounded-[10px] px-3 py-2 placeholder:text-[#A0A0A0] focus:outline-none focus:border-green-500 h-24"
                    />
                    {errors.query && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.query.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary text-white font-semibold md:px-14 px-10 py-3 md:text-xl sm:text-lg text-sm rounded-md hover:bg-[#1b946f] transition"
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
