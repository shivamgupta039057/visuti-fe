"use client";

import React from "react";

const BlogDetailHero = () => {
  return (
    <div className="mb-6 sm:mb-8">
      {/* Author and Date */}
      <p className="text-purple-500 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
        Demi Wilkinson • 1 Jan 2023
      </p>

      {/* Article Title */}
      <h1 className="text-secondary font-bold text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 leading-tight">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>

      {/* Article Description */}
      <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
        Mental models are simple expressions of complex processes or relationships.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-medium">
          Product
        </span>
        <span className="bg-purple-100 text-purple-700 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-medium">
          Research
        </span>
        <span className="bg-orange-100 text-orange-700 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-medium">
          Frameworks
        </span>
      </div>
    </div>
  );
};

export default BlogDetailHero;

