import React from "react";

const Video = (props) => {
  return (
      <div className="trending-video">
        <iframe src={"https://www.youtube.com/embed/" + props.id +"?loop=1&amp;playlist=aHA_UjXVQT"}
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen title={props.title}/>
      </div>
  );
};

export default Video;
