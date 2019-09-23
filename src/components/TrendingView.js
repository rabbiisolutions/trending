import TrendingSection from "./sections/Trending";
import BlogsSection from "./sections/Blogs";
import SocialMedia from "./sections/SocialMedia";
import webpIsSupported from "../helpers/webp";
import React from "react";

const TrendingView = () => {
  return (
      <main className={webpIsSupported() ? 'webp': 'jpeg'}>
        <TrendingSection/>
        <BlogsSection/>
        <SocialMedia/>
      </main>
  );
};

export default TrendingView;
