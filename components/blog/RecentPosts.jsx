import React from "react";

const RecentPosts = ({ posts }) => (
  <div className="border border-gray-200 p-2 sm:p-4 rounded-2xl">
    <h3 className="text-secondary font-bold text-base sm:text-lg mb-3 sm:mb-4">RECENT POST</h3>
    <div className="space-y-2 sm:space-y-3">
      {posts.map((post, index) => (
        <div
          key={index}
          className="pb-2 sm:pb-3 border-b border-gray-200 last:border-0"
        >
          <p className="text-gray-500 text-xs font-medium mb-1">{post.category}</p>
          <h4 className="text-secondary font-medium text-xs sm:text-sm">{post.title}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default RecentPosts;
