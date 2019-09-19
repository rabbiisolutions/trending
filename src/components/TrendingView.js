import SocialLinks from "./sub-items/SocialLinks";
import TrendingVideo from "./sub-items/TrendingVideo";
import TrendingCard from "./sub-items/TrendingCard";
import BlogsCard from "./sub-items/BlogsCard";
import React from "react";

const TrendingView = () => {
  return (
      <div className="trending">
        <TrendingVideo/>
        <TrendingCard/>
        <BlogsCard/>
        <SocialLinks/>
      </div>
  );
};

export default TrendingView;
