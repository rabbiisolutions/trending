import React from "react";
import VideoCard from "../sub-items/VideoCard";
import texts from "../../constants/texts";
import MoreButton from "../sub-items/MoreButton";


const TrendingSection = () => {
  return (
      <section className="trending">
        <div className="section-title">{texts.trending}</div>
        <div className="videos-frame">
          <VideoCard videoId={texts.videos.maths} iframeTitle="maths-facts" title={texts.mathsFact}/>
          <VideoCard videoId={texts.videos.physics} iframeTitle="physics-facts" title={texts.physicsFact}/>
          <VideoCard videoId={texts.videos.pun} iframeTitle="pun-video-II" title={texts.punVideo}/>
          <MoreButton link="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg/videos"/>
        </div>
      </section>
  );
};

export default TrendingSection;