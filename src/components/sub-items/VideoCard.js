import React from "react";
import Video from "../utils/video";

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

export default VideoCard;
