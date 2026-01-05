"use client";

import React from "react";
import Image from "next/image";

const BlogDetailFeaturedImage = () => {
  return (
    <div className="mb-8">
      {/* Featured Image */}
      <div className="relative w-full h-72 w-full md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src="/Subtract.png"
          alt="Sawai Man Singh Hospital"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default BlogDetailFeaturedImage;

