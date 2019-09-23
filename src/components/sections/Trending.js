import React from "react";
import VideoCard from "../sub-items/VideoCard";
import texts from "../../constants/texts";
import MoreButton from "../sub-items/MoreButton";
import Overflow from "../utils/Overflow";


const TrendingSection = () => {
  return (
      <section className="trending">
        <div className="section-title">{texts.trending}</div>
        <div className="videos-frame">
          <VideoCard videoId={texts.videos.animals} iframeTitle="animal-facts" title={texts.animalFact}/>
          <VideoCard videoId={texts.videos.maths} iframeTitle="maths-facts" title={texts.mathsFact}/>
          <VideoCard videoId={texts.videos.nature} iframeTitle="physics-facts" title={texts.natureFact}/>
          <VideoCard videoId={texts.videos.pun} iframeTitle="pun-video-II" title={texts.punVideo}/>
          <MoreButton link="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg/videos"/>
          <Overflow/>
        </div>
      </section>
  );
};

export default TrendingSection;
