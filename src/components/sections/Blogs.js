import React from "react";
import ImageCard from "../sub-items/ImageCard";
import texts from "../../constants/texts";
import blogs from "../../constants/blogs";
import MoreButton from "../sub-items/MoreButton";
import webpIsSupported from "../../helpers/webp";
import musicWebp from "../../images/webp/music.webp";
import musicJpeg from "../../images/jpeg/music.jpg";
import languageWebp from "../../images/webp/language.webp";
import languageJpeg from "../../images/jpeg/language.jpg";
import artWebp from "../../images/webp/art.webp";
import artJpeg from "../../images/jpeg/art.jpg";

const BlogsSection = () => {
  return (
      <section className="blogs">
        <div className="section-title">{texts.blogs}</div>
        <div className="images-frame">
          <ImageCard number={1} title={blogs.music.title} src={webpIsSupported() ? musicWebp : musicJpeg} className="blog-image" alt="music-blog" content={blogs.music.text}/>
          <ImageCard number={2} title={blogs.language.title} src={webpIsSupported() ? languageWebp : languageJpeg} className="blog-image" alt="language-blog" content={blogs.language.text}/>
          <ImageCard number={3} title={blogs.art.title} src={webpIsSupported() ? artWebp : artJpeg} className="blog-image" alt="art-blog" content={blogs.art.text}/>
          <MoreButton link="https://rabbiits.wordpress.com/author/rabbiitech/"/>
        </div>
      </section>
  );
};

export default BlogsSection;
