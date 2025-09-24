"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Serhiy Hipskyy",
      role: "Student",
      text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.",
      img: "/user.png",
    },
    {
      name: "Justus Menke",
      role: "Student",
      text: "Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
      img: "/user.png",
    },
    {
      name: "Britain Eriksen",
      role: "Student",
      text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      img: "/user.png",
    },
    {
      name: "Britain Eriksen",
      role: "Student",
      text: "Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      img: "/user.png",
    },
  ];

  return (
    <section className="py-10 bg-[#f5f8ff]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2B2B3D]">
          See what <span className="text-[#20B486]">our students</span> are saying
        </h2>
        <p className="text-[#9A98A9] mt-4 max-w-2xl mx-auto">
          Hear from students who turned their dreams into reality with our expert guidance.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          className="mt-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md rounded-3xl py-10 px-6 flex flex-col items-center">
                <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full ring-4 ring-white shadow" />
                <h3 className="mt-4 text-xl font-semibold text-[#474747]">{t.name}</h3>
                <p className="text-[#8a8788]">{t.role}</p>
                <p className="mt-4 text-[#898788] max-w-lg">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
