"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopularPosts from "./PopularPosts";
import RecentPosts from "./RecentPosts";
import SocialMedia from "./SocialMedia";

const BlogListing = () => {
  const [currentPage, setCurrentPage] = useState(2);

  const blogPosts = [
    {
      id: 1,
      slug: "bill-walsh-leadership-lessons",
      image: "/Subtract.png",
      author: "Alec Whitten",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: [
        { name: "Leadership", color: "bg-purple-100 text-purple-700" },
        { name: "Management", color: "bg-purple-100 text-purple-700" },
      ],
    },
    {
      id: 2,
      slug: "pm-mental-models",
      image: "/Subtract.png",
      author: "Demi Wilkinson",
      date: "1 Jan 2023",
      title: "PM mental models",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { name: "Product", color: "bg-blue-100 text-blue-700" },
        { name: "Research", color: "bg-gray-100 text-gray-700" },
        { name: "Frameworks", color: "bg-orange-100 text-orange-700" },
      ],
    },
    {
      id: 3,
      slug: "what-is-wireframing",
      image: "/Subtract.png",
      author: "Candice Wu",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: [
        { name: "Design", color: "bg-purple-100 text-purple-700" },
        { name: "Research", color: "bg-blue-100 text-blue-700" },
      ],
    },
    {
      id: 4,
      slug: "how-collaboration-makes-us-better",
      image: "/Subtract.png",
      author: "Natali Craig",
      date: "1 Jan 2023",
      title: "How collaboration makes us",
      description: "Individual designs better.",
      tags: [
        { name: "Design", color: "bg-primary/10 text-primary" },
        { name: "Product", color: "bg-blue-100 text-blue-700" },
      ],
    },
  ];

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
    { category: "NEET UG Counselling", title: "Our 15 favorite websites from August" },
    { category: "NEET UG Counselling", title: "Our 15 favorite websites from August" },
    { category: "NEET UG Counselling", title: "Our 15 favorite websites from August" },
    { category: "NEET UG Counselling", title: "10 essential sections to a high landing page" },
  ];

  return (
    <section className=" md:py-12 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <h2 className="text-secondary font-bold text-xl sm:text-2xl md:text-4xl mb-6 md:mb-8">
          All blog posts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Main Blog Grid - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 block"
                >
                  <div className="relative w-full h-40 sm:h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <p className="text-purple-400 text-xs mb-2 sm:mb-3 font-medium">
                      {post.author} • {post.date}
                    </p>
                    <div className="flex items-start gap-2 mb-2 sm:mb-3">
                      <h3 className="text-secondary font-bold text-base sm:text-lg md:text-xl flex-1 leading-tight">
                        {post.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-1 rotate-45" />
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`${tag.color} px-2 sm:px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4 mt-6 sm:mt-8 md:mt-12 px-1">
              <button className="w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-100 text-black text-lg sm:text-xl font-bold hover:bg-primary hover:text-white transition">
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center rounded-full font-bold text-xs sm:text-lg transition ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-black hover:bg-primary hover:text-white"
                  }`}
                >
                  {String(page).padStart(2, "0")}
                </button>
              ))}
              <span className="flex gap-0.5 sm:gap-2 mx-1 sm:mx-2">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-200 inline-block"></span>
                ))}
              </span>
              {[15, 16].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center rounded-full font-bold text-xs sm:text-lg transition ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-black hover:bg-primary hover:text-white"
                  }`}
                >
                  {String(page).padStart(2, "0")}
                </button>
              ))}
              <button className="w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-100 text-black text-lg sm:text-xl font-bold hover:bg-primary hover:text-white transition">
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sm:space-y-8">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type something..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted" />
              </div>

              {/* Popular Posts */}
              <PopularPosts posts={popularPosts} />

              {/* Recent Posts */}
              <RecentPosts posts={recentPosts} />

              {/* Social Media */}
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListing;

