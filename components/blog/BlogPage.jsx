"use client";

import React from "react";
import BlogHero from "./BlogHero";
import BlogPromoCards from "./BlogPromoCards";
import BlogListing from "./BlogListing";

const BlogPage = () => {
  return (
    <>
      <BlogHero />
      <BlogPromoCards />
      <BlogListing />
    </>
  );
};

export default BlogPage;
