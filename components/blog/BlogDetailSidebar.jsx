"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import PopularPosts from "./PopularPosts";
import RecentPosts from "./RecentPosts";
import SocialMedia from "./SocialMedia";

const BlogDetailSidebar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry!");
  };

  const popularPosts = [
    {
      id: 1,
      slug: "favorite-websites-august",
      image: "/Subtract.png",
      category: "NEET UG Counselling",
      title: "Our 15 favorite websites from August",
    },
    {
      id: 2,
      slug: "beginners-guide-user-research",
      image: "/Subtract.png",
      category: "NEET UG Counselling",
      title: "The beginners guide to user research",
    },
    {
      id: 3,
      slug: "web-page-layout-101",
      image: "/Subtract.png",
      category: "NEET UG Counselling",
      title: "Web page layout 101: website anatomy every designer",
    },
  ];

  const recentPosts = [
    { slug: "favorite-websites-august", category: "NEET UG Counselling", title: "Our 15 favorite websites from August" },
    { slug: "favorite-websites-august-2", category: "NEET UG Counselling", title: "Our 15 favorite websites from August" },
    { slug: "favorite-websites-august-3", category: "NEET UG Counselling", title: "Our 15 favorite websites from August" },
    { slug: "high-landing-page-sections", category: "NEET UG Counselling", title: "10 essential sections to a high landing page" },
  ];

  return (
    <div className="space-y-8 sticky top-24">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Type something..."
          className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
      </div>

      {/* Enquiry Form */}
      <EnquiryForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

      {/* Popular Posts */}
      <PopularPosts posts={popularPosts} />

      {/* Recent Posts */}
      <RecentPosts posts={recentPosts} />

      {/* Social Media */}
      <SocialMedia />
    </div>
  );
};

export default BlogDetailSidebar;

