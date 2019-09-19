import SocialLinks from "./sub-items/SocialLinks";
import TrendingVideo from "./sub-items/TrendingVideo";
import TrendingCard from "./sub-items/TrendingCard";
import React from "react";

const TrendingView = () => {
  return (
      <div>
        <TrendingVideo/>
        <TrendingCard/>
        <SocialLinks/>
      </div>
  );
};

export default TrendingView;
