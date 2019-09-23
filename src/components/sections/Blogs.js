import React from "react";
import ImageCard from "../sub-items/ImageCard";
import texts from "../../constants/texts";
import MoreButton from "../sub-items/MoreButton";


const BlogsSection = () => {
  return (
      <section className="blogs">
        <div className="section-title">{texts.blogs}</div>
        <div className="images-frame">
          <ImageCard number={1} title=""/>
          <ImageCard/>
          <ImageCard/>
          <MoreButton link="https://rabbiits.wordpress.com/author/rabbiitech/"/>
        </div>
      </section>
  );
};

export default BlogsSection;
