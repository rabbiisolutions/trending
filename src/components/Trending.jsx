import React from "react";
import texts from "../constants/texts";
import MoreButton from "./basic/MoreButton";
import Overflow from "./basic/Overflow";

const Video = (props) => {
  return (
      <iframe src={"https://www.youtube.com/embed/" + props.id +"?loop=1&amp;list=PL24nEpN59Cfe3MVGIDNikvxQ2duCh0h1L"}
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen title={props.title}/>
  );
};

const VideoCard = (props) => {
  return (
      <div className="video-card">
        <div className="title">
          {props.title}
        </div>
        <div className="video">
          <Video id={props.videoId} title={props.iframeTitle}/>
        </div>
      </div>
  );
};

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
