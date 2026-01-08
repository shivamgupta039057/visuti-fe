"use client";

import React from "react";
import BlogDetailHero from "./BlogDetailHero";
import BlogDetailFeaturedImage from "./BlogDetailFeaturedImage";
import BlogDetailContent from "./BlogDetailContent";
import BlogDetailSidebar from "./BlogDetailSidebar";

const BlogDetailPage = () => {
  return (
    <div className="bg-white min-h-screen max-md:pt-[73px] pt-44 max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 max-sm pt-5">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <BlogDetailHero />
            <BlogDetailFeaturedImage />
            <BlogDetailContent />
          </div>

          {/* Sidebar - Right Side (1 column) */}
          <div className="lg:col-span-1">
            <BlogDetailSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;

