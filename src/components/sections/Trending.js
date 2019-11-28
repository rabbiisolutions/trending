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
          <VideoCard videoId={texts.videos.teecha} iframeTitle="teecha-rabbii-ts" title={texts.teechaFact}/>
          <VideoCard videoId={texts.videos.africa} iframeTitle="africa-facts" title={texts.africaFact}/>
          <VideoCard videoId={texts.videos.anatomy} iframeTitle="anatomy-facts" title={texts.anatomyFact}/>
          <MoreButton link="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg/videos"/>
          <Overflow/>
        </div>
      </section>
  );
};

export default TrendingSection;
