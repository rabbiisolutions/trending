import React from "react";

const TrendingVideo = () => {
  return (
      <div className="trending-video">
        <iframe height="400" src="https://www.youtube.com/embed/obRan47jNT0?loop=1&amp;playlist=aHA_UjXVQT"
                frameBorder="0" className="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen width="600" title="trending-video"/>
      </div>
  );
};

export default TrendingVideo;
