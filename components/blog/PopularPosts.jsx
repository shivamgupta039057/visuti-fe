import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopularPosts = ({ posts }) => (
  <div className="border border-gray-200 p-2 sm:p-4 rounded-2xl">
    <h3 className="text-secondary font-bold text-base sm:text-xl mb-3 sm:mb-4">POPULAR POST</h3>
    <div className="space-y-3 sm:space-y-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 hover:bg-gray-50 rounded-xl p-2 transition border border-gray-200"
        >
          <div className="relative w-16 h-16 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 sm:mx-0 sm:mb-0 mb-2">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-500 text-xs mb-1 truncate">{post.category}</p>
            <h4 className="text-secondary font-medium line-clamp-2 text-xs sm:text-base leading-snug">{post.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default PopularPosts;
