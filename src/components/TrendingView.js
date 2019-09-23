import TrendingSection from "./sections/Trending";
import BlogsSection from "./sections/Blogs";
import SocialMedia from "./sections/SocialMedia";
import React from "react";

const TrendingView = () => {
  return (
      <main>
        <TrendingSection/>
        <BlogsSection/>
        <SocialMedia/>
      </main>
  );
};

export default TrendingView;
